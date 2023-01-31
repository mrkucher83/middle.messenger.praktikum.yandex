import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default class Chats extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      message: this._props.message,
      card: this._props.card,
      isEmpty: this._props.isEmpty,
    });
  }
}
