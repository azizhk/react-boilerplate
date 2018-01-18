/* @flow */

import type { Action, Dispatch, GetState } from '../types/Store';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../reducers/counter';

export function increment(amount: number): Action<*> {
  return {
    reducer: INCREMENT_COUNTER,
    payload: 1,
  };
}

export function decrement(amount: number): Action<*> {
  return {
    reducer: DECREMENT_COUNTER,
    payload: amount.toString(10),
  };
}

export function incrementIfEven(amount: number) {
  return (dispatch: Dispatch, getState: GetState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      dispatch({
        reducer: DECREMENT_COUNTER,
        payload: '2',
      })
      dispatch({
        reducer: INCREMENT_COUNTER,
        payload: 1
      })
    }
  };
}
