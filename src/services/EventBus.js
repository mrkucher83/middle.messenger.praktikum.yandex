export default class EventBus {
  constructor() {
    this._events = {};
  }

  on(event, callback) {
    if(!this._events[event]) {
      this._events[event] = [];
    }

    this._events[event].push(callback);
  }

  off(event, callback) {
    if(!this._events[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    this._events[event] = this._events[event].filter(
      cb => cb !== callback
    );
  }

  emit(event, ...args) {
    if(!this._events[event]) {
      throw new Error(`There is no event: ${event}`);
    }

    this._events[event].forEach(cb => cb(...args));
  }
}
