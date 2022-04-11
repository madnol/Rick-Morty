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
  charactersActions,
  charactersAsync,
  charactersSelectors,
} from 'core/store/modules/characters';

import Card from 'components/atoms/card';
import BottomCard from 'components/molecules/bottom-card';

import './card-grid.styles.scss';
import CharacterDetail from 'components/organisms/character-detail';

interface OwnProps extends HTMLAttributes<HTMLDivElement> {
  searchValue?: string;
  isFavoriteList?: boolean;
}
interface StateProps {
  characterList: Character[];
  favorites: Character[];
}
interface DispatchProps {
  fetchCharacterList: (id: number) => void;
  addFavoriteList: (character: Character) => void;
  removeFavoriteList: (character: Character) => void;
}

export type Props = OwnProps & StateProps & DispatchProps;

const CardGrid: FunctionComponent<Props> = ({
  className,
  isFavoriteList,
  addFavoriteList,
  removeFavoriteList,
  searchValue,
  characterList,
  favorites,
  fetchCharacterList,
  ...otherProps
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character>();

  const handleData = useCallback(() => {
    const result = fetchCharacterList(1);
    return result;
  }, [fetchCharacterList]);

  const filteredCharacterList = characterList?.filter(
    character =>
      !!searchValue &&
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

  const handleFavorite = useCallback(
    character => {
      console.log(favorites.some(favorite => favorite.id === character.id));
      favorites.some(favorite => favorite.id === character.id)
        ? removeFavoriteList(character)
        : addFavoriteList(character);
    },
    [favorites, addFavoriteList, removeFavoriteList],
  );

  useEffect(() => {
    handleData();
  }, [handleData]);

  useEffect(() => {
    console.log('FAVORITI', favorites);
  }, [favorites]);
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
        {!isFavoriteList &&
          (searchValue ? filteredCharacterList : characterList)?.map(
            ({ id, name, image, ...data }) => {
              const favoriteCheck = favorites.some(
                favorite => favorite.id === id,
              );

              return (
                <Card
                  className="card"
                  key={id}
                  image={image}
                  onImageClick={() =>
                    handleOpenMoldal({ name, image, ...data })
                  }
                >
                  <BottomCard
                    name={name}
                    isFavorite={favoriteCheck}
                    onClick={() => handleFavorite({ id, name, image, ...data })}
                  />
                </Card>
              );
            },
          )}
        {isFavoriteList &&
          favorites?.map(({ id, name, image, ...data }) => {
            const favoriteCheck = favorites.some(
              favorite => favorite.id === id,
            );
            console.log(id);
            return (
              <Card
                className="card"
                key={id}
                image={image}
                onImageClick={() => handleOpenMoldal({ name, image, ...data })}
              >
                <BottomCard
                  name={name}
                  isFavorite={favoriteCheck}
                  onIconClick={() =>
                    handleFavorite({ id, name, image, ...data })
                  }
                />
              </Card>
            );
          })}
      </div>
    </>
  );
};

CardGrid.displayName = 'CardGrid';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (state: RootState) => ({
    characterList: charactersSelectors.getCharactersList(state),
    favorites: charactersSelectors.getFavoriteList(state),
  }),
  (dispatch: Dispatch) => ({
    fetchCharacterList: (id: number) =>
      dispatch(charactersAsync.fetchCharacterList(id)),
    addFavoriteList: (character: Character) =>
      dispatch(charactersActions.addFavorite({ character })),
    removeFavoriteList: (character: Character) =>
      dispatch(charactersActions.removeFavorite({ character })),
  }),
)(CardGrid);
