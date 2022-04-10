import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { State } from './example.types';
import * as actions from './example.actions';

export const initialState: Readonly<State> = {
  list: [],
  loading: false,
  error: undefined,
};

export default reducerWithInitialState(initialState)
  .case(actions.resetExample, () => ({ ...initialState }))
  .case(actions.fetchListStart, state => ({
    ...state,
    loading: true,
    error: undefined,
  }))
  .case(actions.fetchListSuccess, (state, { list }) => ({
    ...state,
    list,
  }))
  .case(actions.fetchListError, (state, { error }) => ({
    ...state,
    error,
  }))
  .build();
