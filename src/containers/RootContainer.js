/* @flow */

import * as React from 'react';
import { Provider } from 'react-redux';
import Counter from '../components/Counter';
import type { Store } from '../types/Store';

type Props = {
  store: Store,
};

const RootContainer = ({ store }: Props) => {
  return (
    <Provider store={store}>
      <Counter label="Amazing Counter: "/>
    </Provider>
  );
};

export default RootContainer;
