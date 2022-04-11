import { FunctionComponent, HTMLProps } from 'react';
import classnames from 'classnames';
import './card.styles.scss';

export interface Props extends HTMLProps<HTMLDivElement> {
  title?: string;
  image?: string;
  className?: string;
}

const Card: FunctionComponent<Props> = ({
  title,
  image,
  className,
  children,
  ...otherProps
}) => (
  <div className={classnames('card', className)} {...otherProps}>
    {!!image && (
      <img className={classnames('card-image')} src={image} alt={title} />
    )}
    {!!children && <div className="card-children">{children}</div>}
  </div>
);

Card.displayName = 'Card';

export default Card;
