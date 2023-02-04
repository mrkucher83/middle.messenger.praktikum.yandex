import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
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
    class: 'server-error',
  },
});
