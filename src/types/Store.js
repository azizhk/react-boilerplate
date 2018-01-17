/* @flow */

import type { Store as ReduxStore } from 'redux'
import type { Action } from './Action';
import type { State } from './State';

export type GetState = () => State;

type ActionDispatch = <T>(action: Action<T>) => void;
export type Thunk = ((Dispatch, GetState) => Promise<void> | void) => void;

export type Dispatch = ActionDispatch & Thunk;

export type Store = ReduxStore<State, Action<any>, Dispatch>
