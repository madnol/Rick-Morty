import {
  FunctionComponent,
  HTMLAttributes,
  useCallback,
  useEffect,
} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { Character } from 'core/api/characters/characters.types';
import { Dispatch, RootState } from 'core/store/store.types';
import {
  charactersAsync,
  charactersSelectors,
} from 'core/store/modules/characters';

import Card from 'components/atoms/card';
import BottomCard from 'components/molecules/bottom-card';

import './card-grid.styles.scss';

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

  return (
    <div className={classnames('test', className)} {...otherProps}>
      <div className="card-grid">
        {characterList?.map(({ id, name, image }) => (
          <Card className="card" key={id} image={image}>
            <BottomCard name={name} isFavorite={true} />
          </Card>
        ))}
      </div>
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
