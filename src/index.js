import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.scss';
import auth from './pages/auth';
import registration from './pages/registration';
import serverError from './pages/500';
import notFound from './pages/404';
import profile from './pages/profile';
import profileEdit from './pages/profile-edit';
import profilePassword from './pages/profile-password';
import chats from './pages/chats';
import button from './components/button';
import input from './components/input';
import message from './components/message';
import card from './components/card';
import {
  cards, messages, authInputs, registrationInputs, profileInputs, profileEditInputs ,profilePasswordInputs
} from "./data";


function getRoute() {
    switch (window.location.pathname) {
        case '/auth':
            return {isAuth: true};
        case '/registration':
            return {isReg: true};
        case '/chats':
            return {isChats: true};
        case '/serverError':
            return {isErr: true};
        case '/notFound':
            return {isNotFound: true};
        case '/profile':
            return {isProfile: true};
        case '/profile_edit':
            return {isProfileEdit: true};
        case '/profile_password':
            return {isProfilePass: true};
    }
}

const comp = Handlebars.compile(tpl);

const res = comp({
  auth: auth({
    input: input({
      inputs: authInputs,
    }),
    button: button('submit', 'SIGN IN'),
  }),
  registration: registration({
    input: input({
      inputs: registrationInputs,
    }),
    button: button('submit', 'SIGN UP'),
  }),
  profile: profile({
    input: input({
      inputs: profileInputs,
    }),
  }),
  profileEdit: profileEdit({
    input: input({
      inputs: profileEditInputs,
    }),
    button: button('submit', 'Save'),
  }),
  profilePassword: profilePassword({
    input: input({
      inputs: profilePasswordInputs,
    }),
    button: button('submit', 'Save'),
  }),
  chats: chats({
    message: message({
      messages,
    }),
    card: card({
      cards,
    }),
    isEmpty: false,
  }),
  serverError: serverError(),
  notFound: notFound(),
  route: getRoute()
})

document.getElementById('root').innerHTML = res;
