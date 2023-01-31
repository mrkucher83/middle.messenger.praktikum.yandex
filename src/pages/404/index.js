import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default class NotFound extends Block {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
    });
  }
}
