import {
  FunctionComponent,
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
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
import CharacterDetail from 'components/organisms/character-detail';

interface OwnProps extends HTMLAttributes<HTMLDivElement> {
  searchValue: string;
}
interface StateProps {
  characterList: Character[];
}
interface DispatchProps {
  fetchCharacterList: (id: number) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;

const CardGrid: FunctionComponent<Props> = ({
  className,
  searchValue,
  characterList,
  fetchCharacterList,
  ...otherProps
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const handleData = useCallback(() => {
    const result = fetchCharacterList(1);
    return result;
  }, [fetchCharacterList]);

  const filteredCharacterList = characterList?.filter(character =>
    character.name?.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const handleOpenMoldal = useCallback(
    character => {
      if (showModal) {
        setSelectedCharacter(character);
      } else {
        setShowModal(!showModal);
        setSelectedCharacter(character);
      }
    },
    [showModal],
  );

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <>
      <div className={classnames('card-grid', className)} {...otherProps}>
        {!!showModal && (
          <CharacterDetail
            data={selectedCharacter}
            className={'character-detail-modal'}
            setModalshow={() => setShowModal(!showModal)}
          />
        )}
        {filteredCharacterList?.map(({ id, name, image, ...data }) => (
          <Card
            className="card"
            key={id}
            image={image}
            onClick={() => handleOpenMoldal({ name, image, ...data })}
          >
            <BottomCard name={name} isFavorite={true} />
          </Card>
        ))}
      </div>
    </>
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
