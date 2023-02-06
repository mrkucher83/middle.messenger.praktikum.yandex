import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Card from '../../components/card';
import { cards, messages } from '../../data';
import Message from '../../components/message';

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

  _addEvents() {
    this._element.querySelector('button').addEventListener('click', this._props.events.click);
    this._element.querySelectorAll('input')
      .forEach(input => input.addEventListener('blur', this._props.events.blur, true));

    super._addEvents();
  }
}

export const chats = new Chats('div', {
  attr: {
    class: 'chats',
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
    'click': function (event) {
      if (event
        && event.target.className === 'bottom__form-send'
        || event.target.tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('sendMessage');
        const formData = new FormData(formElement);

        // добавление отправленного сообщения в массив сообщений
        if (!formData.get('message')) {
          alert('Поле сообщения не должно быть пустым');
        } else {
          document.querySelector('.bottom__form-input').value = '';
          const time = new Date();

          messages.push({
            owner: 'me',
            text: formData.get('message'),
            time: `${time.getHours()}:${time.getMinutes()}`,
          });

          chats._children.message.setProps({
            messages,
          });
        }

        // прокрутка вниз до последнего сообщения
        const wall = document.querySelectorAll('.message');
        wall[wall.length - 1].scrollIntoView({ block: 'end', behavior: 'smooth' });

        console.log({
          message: formData.get('message'),
        });
      }

      if (event && event.target.className === 'chats__side-send') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('search-user-form');
        const formData = new FormData(formElement);

        document.querySelector('.chats__side-search').value = '';

        console.log({
          user: formData.get('user'),
        });
      }

      if (event && event.target.className === 'add-user') {
        chats.setProps({
          isAddOpen: !chats._props.isAddOpen,
        });
      }

      if (event && event.target.className === 'bottom__upload') {
        chats.setProps({
          isAttachOpen: !chats._props.isAttachOpen,
        });
      }
    },
  },
});
