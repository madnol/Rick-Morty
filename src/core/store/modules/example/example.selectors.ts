import { RootState } from '../../store.types';
import { State } from './example.types';

export const getCurrentState = (state: RootState): State => state.example;
export const getExampleList = (state: RootState) => getCurrentState(state).list;
export const getExampleError = (state: RootState) =>
  getCurrentState(state).error;

export const isExampleLoading = (state: RootState) =>
  getCurrentState(state).loading;
