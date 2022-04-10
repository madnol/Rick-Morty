const path = require('path');
const inquirer = require('inquirer');

const componentTemplatePath = 'plop-templates/component';
const componentPaths = new Map([
  ['atoms', 'src/components/{{kebabCase component_type}}'],
  ['molecules', 'src/components/{{kebabCase component_type}}'],
  ['organisms', 'src/components/{{kebabCase component_type}}'],
  ['containers', 'src/components/containers'],
  ['pages', 'src/components/{{kebabCase component_type}}'],
]);
const reduxTemplatePath = 'plop-templates/redux';
const reduxPath = 'src/core/store/modules';
const reduxFiles = [
  'actions.ts',
  'helpers.ts',
  'reducer.ts',
  'reducer.spec.ts',
  'selectors.ts',
  'selectors.spec.ts',
  'thunks.ts',
  'thunks.spec.ts',
  'types.ts',
];

const componentActions = ({
  component_name,
  component_type,
  component_path,
  component_relative_folder = '',
  component_story,
}) => {
  const componentPath = component_path
    ? 'src/' + component_path
    : path.join(componentPaths.get(component_type), component_relative_folder);
  return [
    {
      type: 'add',
      templateFile: componentTemplatePath + '/component.styles.hbs',
      path:
        componentPath +
        '/{{kebabCase component_name}}/{{kebabCase component_name}}.styles.scss',
    },
    {
      type: 'add',
      templateFile: componentTemplatePath + '/index.hbs',
      path: componentPath + '/{{kebabCase component_name}}/index.ts',
    },
    {
      type: 'add',
      templateFile: componentTemplatePath + '/component.hbs',
      path:
        componentPath +
        '/{{kebabCase component_name}}/{{kebabCase component_name}}.tsx',
    },
  ].filter(Boolean);
};

module.exports = plop => {
  plop.addPrompt('directory', require('inquirer-directory'));
  plop.setGenerator('component', {
    description: 'React Component',
    prompts: [
      {
        type: 'input',
        name: 'component_name',
        message: 'Name:',
        validate: answer =>
          (typeof answer === 'string' && !!answer.trim()) ||
          'Component name should not be empty',
      },
      {
        type: 'list',
        name: 'component_type',
        message: 'Type:',
        choices: [
          { name: 'Atom', value: 'atoms' },
          { name: 'Molecule', value: 'molecules' },
          { name: 'Organism', value: 'organisms' },
          { name: 'Container', value: 'containers' },
          { name: 'Page', value: 'pages' },
          new inquirer.Separator(),
          { name: 'Custom Folder', value: false },
        ],
      },

      {
        type: 'directory',
        basePath: path.join(plop.getPlopfilePath(), 'src/'),
        name: 'component_path',
        message: 'Custom Folder:',
        when: ({ component_type }) => !component_type,
      },
      {
        type: 'list',
        name: 'component_in_subfolder',
        message: 'Should be in a sub folder?',
        choices: [
          { name: 'Yes', value: true },
          { name: 'No', value: false },
        ],
        default: false,
        when: ({ component_type }) =>
          ['pages', 'containers'].indexOf(component_type) !== -1,
      },
      {
        type: 'directory',
        basePath: path.join(
          plop.getPlopfilePath(),
          componentPaths.get('containers'),
        ),
        name: 'component_relative_folder',
        message: 'Container Path:',
        when: ({ component_in_subfolder, component_type }) =>
          component_in_subfolder && component_type === 'containers',
      },
      {
        type: 'directory',
        basePath: path.join(
          plop.getPlopfilePath(),
          componentPaths.get('pages'),
        ),
        name: 'component_relative_folder',
        message: 'Page Path:',
        when: ({ component_in_subfolder, component_type }) =>
          component_in_subfolder && component_type === 'pages',
      },

      {
        type: 'list',
        name: 'component_redux',
        message: 'Should be redux aware?',
        choices: [
          { name: 'Yes', value: true },
          { name: 'No', value: false },
        ],
        default: true,
        when: ({ component_type }) =>
          ['pages', 'containers'].indexOf(component_type) !== -1,
      },
    ],
    actions: componentActions,
  });
  plop.setGenerator('redux', {
    description: 'Redux Module',
    prompts: [
      {
        type: 'input',
        name: 'redux_module_name',
        message: 'Name:',
        validate: answer =>
          (typeof answer === 'string' && !!answer.trim()) ||
          'Module name should not be empty',
      },
    ],
    actions: [
      {
        type: 'add',
        templateFile: reduxTemplatePath + '/index.ts.hbs',
        path: reduxPath + '/{{kebabCase redux_module_name}}/index.ts',
      },
      ...reduxFiles.map(file => ({
        type: 'add',
        templateFile: reduxTemplatePath + `/${file}.hbs`,
        path:
          reduxPath +
          `/{{kebabCase redux_module_name}}/{{kebabCase redux_module_name}}.${file}`,
      })),
    ],
  });
};
