/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import type { Store } from '../types/Store';

const composeEnhancers = process.env.NODE_ENV !== 'production'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore(): Store {
  const store = createStore(rootReducer, enhancer);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    /* $FlowFixMe */
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
