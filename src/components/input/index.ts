import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';

export default class Input extends Block {
  render(): DocumentFragment {
    return this.compile(tpl, this._props);
  }
}
