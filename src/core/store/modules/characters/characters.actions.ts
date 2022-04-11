import { actionCreatorFactory } from 'typescript-fsa';
import {
  CharacterListResponseData,
  Episode,
  Character,
} from 'core/api/characters/characters.types';

const actionCreator = actionCreatorFactory('characters');

export const resetCharacters = actionCreator<void>('RESET_CHARACTERS');
export const resetEpisodes = actionCreator<void>('RESET_EPISODES');

// CHARACTERS_LIST_REQUEST
export const fetchCharacterListStart = actionCreator<void>(
  'FETCH_CHARACTER_LIST_START',
);
export const fetchCharacterListSuccess = actionCreator<{
  characterListData: CharacterListResponseData;
}>('FETCH_CHARACTER_LIST_SUCCESS');
export const fetchCharacterListError = actionCreator<{
  error: string;
}>('FETCH_CHARACTER_LIST_ERROR');

// EPISODES_LIST_REQUEST
export const fetchEpisodeListStart = actionCreator<void>(
  'FETCH_EPISODE_LIST_START',
);
export const fetchEpisodeListSuccess = actionCreator<{
  episodeList: Episode[];
  totalPages: number;
}>('FETCH_EPISODE_LIST_SUCCESS');
export const fetchEpisodeListError = actionCreator<{
  error: string;
}>('FETCH_EPISODE_LIST_ERROR');

// FAVORITE_LIST_REQUEST
export const updateFavoriteListStart = actionCreator<void>(
  'FAVORITE_LIST_START',
);
export const addFavorite = actionCreator<{
  character: Character;
}>('ADD_FAVORITE_LIST_SUCCESS');
export const removeFavorite = actionCreator<{
  character: Character;
}>('REMOVE_FAVORITE_LIST_SUCCESS');
export const updateFavoriteListError = actionCreator<{
  error: string;
}>('FAVORITE_LIST_ERROR');
