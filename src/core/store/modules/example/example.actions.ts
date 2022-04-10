import { actionCreatorFactory } from 'typescript-fsa';
import { ExampleValue } from './example.types';

const actionCreator = actionCreatorFactory('example');

export const resetExample = actionCreator<void>('RESET');
export const fetchListStart = actionCreator<void>('FETCH_LIST_START');
export const fetchListSuccess = actionCreator<{ list: ExampleValue[] }>(
  'FETCH_LIST_SUCCESS',
);
export const fetchListError = actionCreator<{ error: string }>(
  'FETCH_LIST_ERROR',
);
