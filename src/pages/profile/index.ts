import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Input from '../../components/input';
import { profileInputs } from '../../data';

export class Profile extends Block {
  render(): DocumentFragment {
    return this.compile(tpl, {
      attr: this._props.attr,
      input: this._props.input,
    });
  }
}

export const profile = new Profile('div', {
  attr: {
    class: 'profile',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: profileInputs,
  }),
});
