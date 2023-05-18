import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Input from '../../components/input';
import { profileInputs } from '../../data';
import { router } from '../../index';
import authController from '../../controllers/AuthController';
import store, { StoreEvents } from '../../store';

export class Profile extends Block {
  userData: Array<any>;

  constructor(...args: any[]) {
    super(...args);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    })
  }


  componentDidMount() {
    authController.getUser()

    if (store.getState().user) {
      this.userData = profileInputs.map(el => {
        el.value = store.getState().user[el.name]
        return el;
      });
    }


    store.set('profile', this.userData);

    // @ts-ignore
    this._children.input.setProps({inputs: this.userData});
  }

  render(): DocumentFragment {
    return this.compile(tpl, this._props);
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
    inputs: store.getState().profile,
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
