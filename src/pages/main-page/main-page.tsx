import { ChangeEvent, FunctionComponent, HTMLProps, useState } from 'react';
import classnames from 'classnames';
import './main-page.styles.scss';
import { connect } from 'react-redux';

import { RootState } from 'core/store/store.types';
import SearchBar from 'components/organisms/search-bar';
import CardGrid from 'containers/card-grid';

interface OwnProps extends HTMLProps<HTMLDivElement> {}
interface StateProps {}
interface DispatchProps {}

export type Props = OwnProps & StateProps & DispatchProps;

const MainPage: FunctionComponent<Props> = ({ className, ...otherProps }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    return setSearchValue(e.target.value);
  };

  return (
    <div className={classnames('main-page', className)} {...otherProps}>
      <SearchBar value={searchValue} setValue={handleSearchValue} />
      <CardGrid searchValue={searchValue} />
    </div>
  );
};

MainPage.displayName = 'MainPage';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (/*state: RootState, ownProps: OwnProps*/) => ({}),
  {},
)(MainPage);
