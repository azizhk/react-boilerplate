/* @flow */

import type { Action } from '../types/Action';


export type State = number;
const initialState: State = 0
export default initialState

export function INCREMENT_COUNTER (state: State, payload: number): State {
  return state + payload
}

export function DECREMENT_COUNTER (state: State, payload: number): State {
  return state - payload
}
