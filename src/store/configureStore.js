/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import type { StoreEnhancer } from 'redux'
import thunk from 'redux-thunk';
import type { Store, Dispatch } from '../types/Store';
import type { State } from '../types/State';
import type { Action } from '../types/Action';
import initialState from '../reducers'

const dispatchReducerEnhancer: StoreEnhancer<State, Action<any>, Dispatch> =  (createStore) => {
  return function (reducer): Store {
    const store = createStore(reducer);
    return {
      ...store,
      dispatch: (action: any) => {
        if (
          typeof action === 'object' &&
          typeof action.reducer === 'object'
        ) {
          const keys = Object.keys(action.reducer)
          if (keys.length >= 1) {
            const type = action.reducer[keys[0]].name
            action = {
              ...action,
              type
            }
          }
        }
        return store.dispatch(action)
      }
    };
  }
}

function reducer (state: State, action: Action<any>): State {
  if (!state) {
    return initialState()
  }
  if (typeof action.reducer === 'object') {
    const keys = Object.keys(action.reducer);
    const newPartialState = keys.reduce((newPartialState, key) => {
      newPartialState[key] = action.reducer[key](state[key], action.payload);
      return newPartialState;
    }, {});
    return {
      ...state,
      ...newPartialState
    };
  }
  return state;
}

const composeEnhancers = (process.env.NODE_ENV !== 'production')
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk), dispatchReducerEnhancer);

export default function configureStore(): Store {
  const store = enhancer(createStore)(reducer);
  return store;
}
