import { FETCH_ERROR } from 'core/config/errors';

import { Dispatch } from '../../store.types';

import { generateExampleValues } from './example.helpers';
import * as actions from './example.actions';

// Fake thunk, just an example
export const fetchExampleList = () => (dispatch: Dispatch) => {
  dispatch(actions.fetchListStart());
  try {
    // Imagine this value comes from an async API request
    const fetchedList = ['one', 'two', 'three'];
    const exampleList = generateExampleValues(fetchedList);
    return dispatch(actions.fetchListSuccess({ list: exampleList }));
  } catch (error) {
    return dispatch(actions.fetchListError({ error: FETCH_ERROR }));
  }
};
