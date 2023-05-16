import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import {router} from '../../index';

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
  },
  events: {
    'click': (event: Event) => {
      event.preventDefault();
      if (event && (event.target as HTMLFormElement).className === 'not-found__link') {
        router.go('/messenger');
      }
    }
  }
});
