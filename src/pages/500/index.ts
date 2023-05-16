import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import {router} from '../../index';

export class ServerError extends Block {
  render(): DocumentFragment {
    return this.compile(tpl, {
      attr: this._props.attr,
    });
  }
}

export const serverError = new ServerError('div', {
  attr: {
    class: 'server-error',
  },
  events: {
    'click': (event: Event) => {
      event.preventDefault();
      if (event && (event.target as HTMLFormElement).className === 'server-error__link') {
        router.go('/messenger');
      }
    }
  },
});
