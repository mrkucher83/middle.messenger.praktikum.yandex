import tpl from 'bundle-text:./index.hbs';
import './style.scss';

import getRoute from './utils/routing';
import render from './utils/renderDOM';

import Block from './services/Block';

import { notFound } from './pages/404';
import { serverError } from './pages/500';
import { auth } from './pages/auth';
import { registration } from './pages/registration';
import { profile } from './pages/profile';
import { profileEdit } from './pages/profile-edit';
import { profilePassword } from './pages/profile-password';
import { chats } from './pages/chats';

class Messenger extends Block {
  render() {
    return this.compile(tpl, {
      auth: this._props.auth,
      registration: this._props.registration,
      chats: this._props.chats,
      profile: this._props.profile,
      profileEdit: this._props.profileEdit,
      profilePassword: this._props.profilePassword,
      notFound: this._props.notFound,
      serverError: this._props.serverError,
      route: this._props.route,
    });
  }
}

const messenger = new Messenger('div', {
  auth,
  registration,
  chats,
  profile,
  profileEdit,
  profilePassword,
  notFound,
  serverError,
  route: getRoute(),
});

render('#root', messenger);
