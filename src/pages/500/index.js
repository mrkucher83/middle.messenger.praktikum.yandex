import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export class ServerError extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
    });
  }
}

export const serverError = new ServerError('div', {
  attr: {
    class: 'serverError'
  },
});
