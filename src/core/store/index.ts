import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './store.reducer';
import { INIT_ACTION_TYPE } from './store.const';

const composeRickAndMorty: typeof compose =
  (window as any).__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeRickAndMorty(applyMiddleware(thunk)),
);

store.dispatch({
  type: INIT_ACTION_TYPE,
  payload: undefined,
});

export default store;
