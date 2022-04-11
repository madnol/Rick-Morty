import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Character, State } from './characters.types';
import * as actions from './characters.actions';

export const initialState: Readonly<State> = {
  characterList: {
    loading: false,
    list: [],
    info: {
      count: 0,
      pages: 0,
      next: undefined,
      prev: null,
    },
    error: undefined,
  },
  favorites: {
    loading: false,
    list: [],
    error: undefined,
  },
  episodeList: {
    loading: false,
    list: [],
    error: undefined,
  },
};

export default reducerWithInitialState(initialState)
  .case(actions.resetCharacters, () => ({
    ...initialState,
    characterList: {
      ...initialState.characterList,
    },
  }))
  .case(actions.resetEpisodes, () => ({
    ...initialState,
    episodeList: {
      ...initialState.episodeList,
    },
  }))
  .case(actions.fetchCharacterListStart, state => ({
    ...state,
    characterList: {
      ...state.characterList,
      loading: true,
    },
  }))
  .case(actions.fetchCharacterListSuccess, (state, { characterListData }) => ({
    ...state,
    characterList: {
      ...state.characterList,
      loading: false,
      list: characterListData.results,
      info: characterListData.info,
    },
  }))
  .case(actions.fetchCharacterListError, (state, { error }) => ({
    ...state,
    characterList: {
      ...state.characterList,
      loading: false,
      error,
    },
  }))
  .case(actions.fetchEpisodeListStart, state => ({
    ...state,
    episodeList: {
      ...state.episodeList,
      loading: true,
    },
  }))
  .case(
    actions.fetchEpisodeListSuccess,
    (state, { episodeList, totalPages }) => ({
      ...state,
      episodeList: {
        ...state.episodeList,
        loading: false,
        list: episodeList,
        totalPages,
      },
    }),
  )
  .case(actions.fetchEpisodeListError, (state, { error }) => ({
    ...state,
    episodeList: {
      ...state.episodeList,
      loading: false,
      error,
    },
  }))
  .case(actions.addFavorite, (state, { character }) => {
    return {
      ...state,
      favorites: {
        ...state.favorites,
        loading: false,
        list: [...state.favorites.list, character],
      },
    };
  })
  .case(actions.removeFavorite, (state, { character }) => {
    return {
      ...state,
      favorites: {
        ...state.favorites,
        loading: false,
        list: state.favorites.list.filter(
          (favorite: Character) => favorite.id !== character.id,
        ),
      },
    };
  })
  .case(actions.updateFavoriteListError, (state, { error }) => ({
    ...state,
    favorites: {
      ...state.favorites,
      loading: false,
      error,
    },
  }))
  .build();
