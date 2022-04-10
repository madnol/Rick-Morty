import { State as ExampleState } from './modules/example';
import { State as CharacterState } from './modules/characters';
import { Action as FsaAction } from 'typescript-fsa';
import { ThunkDispatch } from 'redux-thunk';

export interface Action extends FsaAction<any> {
  type: any;
}
export type Dispatch = ThunkDispatch<RootState, any, Action>;
export type StateGetter = () => RootState;
export type Store = {
  dispatch: Dispatch;
  getState: StateGetter;
};
export type Middleware = (
  store: Store,
) => (next: Dispatch) => (action: Action) => Action | Promise<Action> | void;

export interface RootState {
  example: ExampleState;
  character: CharacterState;
}
