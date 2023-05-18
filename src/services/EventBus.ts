type Callback = (event: Event) => never | void

type Events = {
  [key: string]: Array<Callback>;
}


export default class EventBus {
  _events: Events;

  constructor() {
    this._events = {};
  }

  on(event: string, callback: Callback) {
    if (!this._events[event]) {
      this._events[event] = [];
    }

    this._events[event].push(callback);
  }

  off(event: string, callback: Callback) {
    if (!this._events[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    this._events[event] = this._events[event].filter(
      cb => cb !== callback
    );
  }

  emit(event: string, ...args: unknown[]) {
    if (!this._events[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    // @ts-ignore
    this._events[event].forEach(cb => cb(...args));
  }
}
