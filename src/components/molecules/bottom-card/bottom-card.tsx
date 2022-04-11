import { FunctionComponent, HTMLAttributes } from 'react';
import classnames from 'classnames';
import Icon from 'components/atoms/icon';

import './bottom-card.styles.scss';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
  isFavorite?: boolean;
  className?: string;
  onIconClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const BottomCard: FunctionComponent<Props> = ({
  name,
  isFavorite = false,
  onIconClick,
  className,
  ...otherProps
}) => (
  <div className={classnames('bottom-card', className)} {...otherProps}>
    {!!name && <h3 className="bottom-card-title">{name}</h3>}
    <div className="card-favorite">
      <Icon
        className="favorite-icon"
        iconName="HeartIcon"
        color={'red'}
        isIconClicked={isFavorite}
        onClick={onIconClick}
      />
    </div>
  </div>
);

BottomCard.displayName = 'BottomCard';

export default BottomCard;
