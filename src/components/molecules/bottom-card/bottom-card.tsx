import { FunctionComponent } from 'react';
import classnames from 'classnames';
import Icon from 'components/atoms/icon';

import './bottom-card.styles.scss';

export interface Props {
  name?: string;
  isFavorite: boolean;
  className?: string;
}

const BottomCard: FunctionComponent<Props> = ({
  name,
  isFavorite = false,
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
      />
    </div>
  </div>
);

BottomCard.displayName = 'BottomCard';

export default BottomCard;
