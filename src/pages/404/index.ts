import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';

export class NotFound extends Block {
  render(): DocumentFragment {
    return this.compile(tpl, {
      attr: this._props.attr,
    });
  }
}

export const notFound = new NotFound('div', {
  attr: {
    class: 'not-found',
  }
});
