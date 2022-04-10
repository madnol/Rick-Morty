import { FunctionComponent, HTMLProps } from 'react';
import classnames from 'classnames';
import { ICONS } from './icon.const';
import { IconName } from './icon.types';
import './icon.styles.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  iconName: IconName;
  color?: string;
  isIconClicked?: boolean;
}

export const Icon: FunctionComponent<Props> = ({
  className,
  iconName,
  color,
  isIconClicked = false,
  ...otherProps
}) => {
  const Logo = ICONS[iconName];
  return (
    <div className={classnames('icon', className)} {...otherProps}>
      {!isIconClicked && <Logo stroke={color} />}
      {isIconClicked && <Logo fill={color} />}
    </div>
  );
};

Icon.displayName = 'Icon';

export default Icon;
