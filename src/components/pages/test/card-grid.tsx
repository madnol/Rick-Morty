import {
  FunctionComponent,
  HTMLAttributes,
  useCallback,
  useEffect,
} from 'react';
import classnames from 'classnames';
import './card-grid.styles.scss';
import { connect } from 'react-redux';

import { Dispatch, RootState } from 'core/store/store.types';
import {
  charactersAsync,
  charactersSelectors,
} from 'core/store/modules/characters';
import Card from 'components/atoms/card';

import { Character } from 'core/api/characters/characters.types';

interface OwnProps extends HTMLAttributes<HTMLDivElement> {}
interface StateProps {
  characterList: Character[];
}
interface DispatchProps {
  fetchCharacterList: (id: number) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;

const CardGrid: FunctionComponent<Props> = ({
  className,
  characterList,
  fetchCharacterList,
  ...otherProps
}) => {
  const handleData = useCallback(() => {
    const result = fetchCharacterList(1);
    return result;
  }, [fetchCharacterList]);

  useEffect(() => {
    handleData();
  }, [handleData]);
  console.log(characterList);
  return (
    <div className={classnames('test', className)} {...otherProps}>
      {characterList?.map(({ id, name, image }) => (
        <Card key={id} name={name} image={image} />
      ))}
    </div>
  );
};

CardGrid.displayName = 'CardGrid';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (state: RootState) => ({
    characterList: charactersSelectors.getCharactersList(state),
  }),
  (dispatch: Dispatch) => ({
    fetchCharacterList: (id: number) =>
      dispatch(charactersAsync.fetchCharacterList(id)),
  }),
)(CardGrid);
