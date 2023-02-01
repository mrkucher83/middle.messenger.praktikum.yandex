import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export class NotFound extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
    });
  }
}

export const notFound = new NotFound('div', {
  attr: {
    class: 'notFound'
  },
});
