/* @flow */

import type { Action } from '../types/Action';
import type { Dispatch, GetState } from '../types/Store';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../reducers/counter';

export function increment(amount: number): Action<*> {
  return {
    reducer: {
      counter: INCREMENT_COUNTER
    },
    payload: amount,
  };
}

export function decrement(amount: number): Action<*> {
  return {
    reducer: {
      counter: DECREMENT_COUNTER
    },
    payload: amount,
  };
}

export function incrementIfEven(amount: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      dispatch(increment(amount));
    }
  };
}
