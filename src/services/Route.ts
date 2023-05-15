import isEqual from '../utils/isEqual';
import render from '../utils/renderDOM';
import Block from './Block';

export default class Route {
  private _pathname: string;
  private _blockClass: Block;
  private _block: Block | null;
  private _props: any; //***

  constructor(pathname: string, view: Block, props: any) {
    this._pathname = pathname;
    this._blockClass = view;
    //this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      // @ts-ignore
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block!);
      return;
    }

    this._block.show();
  }
}
