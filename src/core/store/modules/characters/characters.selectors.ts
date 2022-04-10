import { RootState } from '../../store.types';
import { State } from './characters.types';

export const getCurrentState = (state: RootState): State => state.character;

export const getCharactersList = (state: RootState) =>
  getCurrentState(state).characterList.list;
