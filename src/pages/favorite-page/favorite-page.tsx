import { FunctionComponent, HTMLProps } from 'react';
import classnames from 'classnames';
import './favorite-page.styles.scss';
import { connect } from 'react-redux';

import { RootState } from 'core/store/store.types';
import CardGrid from 'containers/card-grid';
import Icon from 'components/atoms/icon';
import { Link } from 'react-router-dom';

interface OwnProps extends HTMLProps<HTMLDivElement> {}
interface StateProps {}
interface DispatchProps {}

export type Props = OwnProps & StateProps & DispatchProps;

const FavoritePage: FunctionComponent<Props> = ({
  className,
  ...otherProps
}) => (
  <div className={classnames('favorite-page', className)} {...otherProps}>
    <Link to="/">
      <Icon className="home-page-button-icon" iconName="HomeIcon" color="red" />
    </Link>
    <CardGrid isFavoriteList />
  </div>
);

FavoritePage.displayName = 'FavoritePage';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (/*state: RootState, ownProps: OwnProps*/) => ({}),
  {},
)(FavoritePage);
