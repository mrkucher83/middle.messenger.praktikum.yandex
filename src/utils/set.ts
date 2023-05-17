import { Indexed } from '../types';
import merge from './merge';

export default function set(object: Indexed | unknown, path: string, value: unknown) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  let res = path.split('.').reduceRight((acc, curr) => {
    return { [curr]: acc }
  }, value as any)

  return merge(object as Indexed, res);
}
