import { charactersApi } from 'core/api';
import { FETCH_ERROR } from 'core/config/errors';
import { Dispatch } from 'core/store/store.types';
import * as actions from './characters.actions';

export const fetchCharacterList =
  (id: number) => async (dispatch: Dispatch) => {
    dispatch(actions.fetchCharacterListStart());
    try {
      const characterListData = await charactersApi.getCharactersList(id);
      dispatch(actions.fetchCharacterListSuccess({ characterListData }));
    } catch (error) {
      console.log(error);
      dispatch(actions.fetchCharacterListError({ error: FETCH_ERROR }));
    }
  };
