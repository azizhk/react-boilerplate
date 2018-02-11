/* @flow */

import type { Action, Dispatch, GetState } from '../types/Store';
import { INCREMENT_COUNTER } from '../reducers/counter';

export function increment(dispatch: Dispatch, amount: number) {
	return dispatch({
		reducer: INCREMENT_COUNTER,
		payload: '1',
	});
}

export function decrement(dispatch: Dispatch, amount: number) {
	return dispatch({
		reducer: DECREMENT_COUNTER,
		payload: amount.toString(10),
	});
}

function reducer (state, action) {
  if (action.reducer) {
    return action.reducer(
			state,
			action.payload
		)
  }
  return state
}



export function incrementIfEven(dispatch: Dispatch, amount: number) {
	return dispatch((dispatch: Dispatch, getState: GetState) => {
		const { counter } = getState();

		if (counter % 2 === 0) {
			dispatch({
				reducer: DECREMENT_COUNTER,
				payload: amount.toString(10),
			})
			dispatch({
				reducer: INCREMENT_COUNTER,
				payload: amount * 2
			})
		}
	})
}
