/* @flow */

export type ExtractReturn<F> =  $PropertyType<$ObjMap<{ x: F }, <R>(f: (*) => R) => R>, 'x'>
