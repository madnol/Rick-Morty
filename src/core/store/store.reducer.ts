import { combineReducers } from 'redux';
import charactersReducer from './modules/characters/characters.reducer';
import exampleReducer from './modules/example/example.reducer';
import { Action, RootState } from './store.types';

export default combineReducers<RootState, Action>({
  example: exampleReducer,
  character: charactersReducer,
});
