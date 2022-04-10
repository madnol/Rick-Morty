import reducer, {
  initialState as exampleInitialState,
} from './example.reducer';
import * as exampleActions from './example.actions';
import * as exampleSelectors from './example.selectors';
import * as exampleAsync from './example.thunks';

export default reducer;
export * from './example.types';
export { exampleInitialState, exampleActions, exampleSelectors, exampleAsync };
