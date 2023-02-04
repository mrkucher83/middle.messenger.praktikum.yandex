import { v4 as makeUUID } from 'uuid';
import * as Handlebars from 'handlebars';
import  EventBus  from './EventBus';

type Meta = {
  tagName: string;
  props?: Record<string, any>
}

interface Events {
  click?: (e: Event) => never;
  blur?: (e: Event) => never;
}

type PropsAndChildren = {
  props?: Record<string, any>;
  children?: Record<string, Block>;
}

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _props: Record<string, any>;
  _children: ProxyHandler<Block>;
  _element: HTMLElement | null = null;
  _meta: Meta | null = null;
  _id: string | null = null;
  _eventBus: EventBus;

  /** JSDoc
   *  @param {string} tagName
   *  @param {Object} propsAndChildren
   *
   *  @return {void}
   */
  constructor(tagName: string = 'div', propsAndChildren: PropsAndChildren = {}) {
    const { children, props } = this._getChildren(propsAndChildren);
    this._children = this._makePropsProxy(children);

    this._eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();

    this._props = this._makePropsProxy({...props, _id: this._id});

    this.registerEvents();
    this._eventBus.emit(Block.EVENTS.INIT);
  }

  registerEvents() {
    this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
  }

  init() {
    this._element = this._meta ? this._createDocumentElement(this._meta?.tagName) : null;
    this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    if(this._props.settings?.withInternalID && typeof this._id === 'string')
      element.setAttribute('data-id', this._id);
    return element;
  }

  _render() {
    // @ts-ignore
    const block: DocumentFragment = this.render();

    this._removeEvents();
    if (this._element) {
      this._element.innerHTML = '';
      this._element.appendChild(block);
    }
    this._addEvents();
    this._addAttribute();
  }

  render() {}

  _addEvents() {
    // @ts-ignore
    const {events = {}}: Events = this._props;

    Object.keys(events).forEach(eventName => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  _removeEvents() {
    const {events = {}} = this._props;

    Object.keys(events).forEach(eventName => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  _addAttribute() {
    // @ts-ignore
    const {attr = {}}: Record<string, string> = this._props;

    Object.entries(attr).forEach(([key, value]) => {
      if (this._element) {
        this._element.setAttribute(key, value);
      }
    });
  }

  _getChildren(propsAndChildren: PropsAndChildren) {
    const children: Record<string, Block> = {};
    const props: Record<string, unknown> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  compile(template: string, props: Record<string, unknown>): DocumentFragment {
    if(typeof props === 'undefined') {
      props = this._props;
    }
    const propsAndStubs = {...props};

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

      if(stub) {
        stub.replaceWith(child.getContent());
      }
    });

    return fragment.content;
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this._children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    if(Object.keys(this._children).length)
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(response) {
      this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>) {
    console.log(oldProps, newProps)
    return true;
  }

  setProps(nextProps: Record<string, any>) {
    if(!nextProps) {
      return;
    }

    const { children, props } = this._getChildren(nextProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }

    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
  }

  _makePropsProxy(props: Record<string, any>): ProxyHandler<Block> {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldValue = {...target};
        target[prop as string] = value;
        self._eventBus.emit(Block.EVENTS.FLOW_CDU, oldValue, target);
        return true;
      },
    });
  }

  getContent(): HTMLElement | null  {
    return this._element;
  }

  show() {
    // @ts-ignore
    this.getContent().style.display = 'block';
  }

  hide() {
    // @ts-ignore
    this.getContent().style.display = 'none';
  }
}
