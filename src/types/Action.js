/* @flow */

import type { Reducer } from './Reducer';

export type Action<P> = {
  reducer: {
    [string]: Reducer<any, P>
  },
  payload: P
}
