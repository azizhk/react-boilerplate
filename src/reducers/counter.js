/* @flow */

import type { Action } from '../types/Action';
import type { State } from '../types/State';

export function INCREMENT_COUNTER (state: State, payload: number): State {
  return {
    ...state,
    counter: state.counter + payload
  }
}

export function DECREMENT_COUNTER (state: State, payload: number): State {
  return {
    ...state,
    counter: state.counter - payload
  }
}
