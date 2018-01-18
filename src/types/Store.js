// @flow

import type { Store as ReduxStore, DispatchAPI} from 'redux'
import type { State } from './State';

export type GetState = () => State;

export type Reducer<P> = (state: State, payload: P) => State

export type Dispatch = <T>(action: Action<T>) => void

export type Store = ReduxStore<State, Action<any>, Dispatch>

export type Thunk = (Dispatch, GetState) => Promise<void> | void

export type Action<P> = {
  reducer: Reducer<P>,
  payload: P
} | Thunk;
