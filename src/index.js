import tpl from 'bundle-text:./index.hbs';
import './style.scss';
import getRoute from "./utils/routing";
import {
  cards, messages, authInputs, registrationInputs, profileInputs, profileEditInputs ,profilePasswordInputs
} from "./data";
import render from "./utils/renderDOM";
import Block from "./services/Block";
import NotFound from "./pages/404";
import ServerError from "./pages/500";
import Auth from "./pages/auth";
import Button from "./components/button";
import Input from "./components/input";
import Registration from "./pages/registration";
import Profile from "./pages/profile";
import ProfileEdit from "./pages/profile-edit";
import ProfilePassword from "./pages/profile-password";
import Chats from "./pages/chats";
import Card from "./components/card";
import Message from "./components/message";

const auth = new Auth('div', {
  attr: {
    class: 'auth',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: authInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN IN',
  }),
});

const registration = new Registration('div', {
  attr: {
    class: 'registration',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: registrationInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN UP',
  }),
});

const chats = new Chats('div', {
  attr: {
    class: 'chats',
  },
  card: new Card('div', {
    attr: {
      class: 'chats__side-list'
    },
    cards: cards,
  }),
  message: new Message('div', {
    attr: {
      class: 'wall__flow',
    },
    messages: messages,
  }),
  isEmpty: false,
});

const profile = new Profile('div', {
  attr: {
    class: 'profile',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: profileInputs,
  }),
});

const profileEdit = new ProfileEdit('div', {
  attr: {
    class: 'profile-edit',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: profileEditInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'Save',
  }),
});

const profilePassword = new ProfilePassword('div', {
  attr: {
    class: 'profile-password',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: profilePasswordInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'Save',
  }),
});

const notFound = new NotFound('div', {
  attr: {
    class: 'notFound'
  },
});

const serverError = new ServerError('div', {
  attr: {
    class: 'serverError'
  },
});

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
