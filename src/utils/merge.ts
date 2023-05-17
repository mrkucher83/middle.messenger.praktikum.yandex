import { Indexed } from '../types';

export default function merge(lhs: Indexed, rhs: Indexed) {
  if (Object.keys(lhs)[0] !== Object.keys(rhs)[0]) {
    return Object.assign(lhs, rhs);
  }

  for(let key in lhs) {
    if (rhs.hasOwnProperty(key)) {
      lhs[key] = merge(lhs[key] as Indexed, rhs[key] as Indexed)
    }
  }

  return lhs;
}
