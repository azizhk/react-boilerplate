/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import type { Middleware } from 'redux'
import thunk from 'redux-thunk';
import type { Action, Thunk, Store, Dispatch } from '../types/Store';
import type { State } from '../types/State';
import initialState from '../reducers'

const dispatchReducerMiddleware:Middleware<State, Action<any>, Dispatch> = () => next => (action:Action<any>) => {
  if (
    typeof action === 'object' &&
    typeof action.reducer === 'function'
  ) {
    action = {
      ...action,
      type: action.reducer.name
    }
  }
  return next(action)
}

function reducer (state: State, action: Action<*>): State {
  if (!state) {
    return initialState()
  }
  if (typeof action.reducer === 'function') {
    return action.reducer(state, action.payload);
  }
  return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, dispatchReducerMiddleware));

export default function configureStore(): Store {
  const store = createStore(reducer, enhancer);
  return store;
}
