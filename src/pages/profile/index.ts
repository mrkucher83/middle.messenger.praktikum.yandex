import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Input from '../../components/input';
import { profileInputs } from '../../data';
import { router } from '../../index';
import authController from '../../controllers/AuthController';

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
  events: {
    'click': (event: Event) => {
      event.preventDefault();
      if (event && (event.target as HTMLFormElement).className === 'profile-container__links-item settings') {
        router.go('/settings');
      }

      if (event && (event.target as HTMLFormElement).className === 'profile-container__links-item password') {
        router.go('/password-change');
      }

      if (event && (event.target as HTMLFormElement).className === 'profile-container__links-item red') {
        authController.logout();
      }
    }
  }
});
