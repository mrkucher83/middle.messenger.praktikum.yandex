import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Card from '../../components/card';
import { cards, messages } from '../../data';
import Message from '../../components/message';
import {router} from '../../index';

export class Chats extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      message: this._props.message,
      card: this._props.card,
      isEmpty: this._props.isEmpty,
      isAddOpen: this._props.isAddOpen,
      isAttachOpen: this._props.isAttachOpen,
    });
  }
}

export const chats = new Chats('div', {
  attr: {
    class: 'chats-block',
  },
  card: new Card('div', {
    attr: {
      class: 'chats__side-list',
    },
    cards,
  }),
  message: new Message('div', {
    attr: {
      class: 'wall__flow',
    },
    messages,
  }),
  isEmpty: false,
  isAddOpen: false,
  isAttachOpen: false,
  events: {
    'click': function (event: Event) {
      if (event
        && (event.target as HTMLFormElement).className === 'bottom__form-send'
        || (event.target as HTMLFormElement).tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('sendMessage');
        const formData = new FormData(formElement as HTMLFormElement);

        // добавление отправленного сообщения в массив сообщений
        if (!formData.get('message')) {
          alert('Поле сообщения не должно быть пустым');
        } else {
          (document.querySelector('.bottom__form-input') as HTMLInputElement).value = '';
          const time = new Date();

          messages.push({
            owner: 'me',
            text: formData.get('message') as string,
            time: `${time.getHours()}:${time.getMinutes()}`,
          });

          // @ts-ignore
          chats._children.message.setProps({
            messages,
          });

          console.log({
            message: formData.get('message'),
          });
        }

        // прокрутка вниз до последнего сообщения
        const wall = document.querySelectorAll('.message');
        wall[wall.length - 1].scrollIntoView({ block: 'end', behavior: 'smooth' });
      }

      if (event && (event.target as HTMLFormElement).className === 'chats__side-send') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('search-user-form');
        const formData = new FormData(formElement as HTMLFormElement);

        (document.querySelector('.chats__side-search') as HTMLInputElement).value = '';

        console.log({
          user: formData.get('user'),
        });
      }

      if (event && (event.target as HTMLFormElement).className === 'add-user') {
        chats.setProps({
          isAddOpen: !chats._props.isAddOpen,
        });
      }

      if (event && (event.target as HTMLFormElement).className === 'bottom__upload') {
        chats.setProps({
          isAttachOpen: !chats._props.isAttachOpen,
        });
      }

      if (event && (event.target as HTMLFormElement).className === 'chats__side-link') {
        event.preventDefault();
        router.go('/profile');
      }
    },
  },
});
