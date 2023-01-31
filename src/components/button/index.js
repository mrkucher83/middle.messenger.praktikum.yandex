import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default class Button extends Block {
  render() {
    return this.compile(tpl, {
      type: this._props.type,
      text: this._props.text,
    });
  }
}
