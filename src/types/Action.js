/* @flow */

import type { Reducer } from './Reducer';

export type Action<P> = {
  reducer: Reducer<any, P>,
  payload: P
}
