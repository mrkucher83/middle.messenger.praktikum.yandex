type PlainObject<T = any> = {
  [k in string]: T;
};

export default function isEqual(a: PlainObject, b: PlainObject): boolean {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  const filtered = keysA.filter((el, i) => el === keysB[i]);
  if (filtered.length !== keysB.length) {
    return false;
  }

  for(let key in a) {
    if (Array.isArray(a[key]) || isObj(a[key])) {
      if (isEqual(a[key], b[key])) {
        continue;
      }
      return false;
    }

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}

function isObj(obj: PlainObject): boolean {
  return typeof obj === 'object'
    && obj.constructor === Object
    && obj !== null
    && Object.prototype.toString.call(obj) === '[object Object]';
}
