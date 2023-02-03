import Block from '../../services/Block';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default class Message extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      messages: this._props.messages,
    });
  }
}
