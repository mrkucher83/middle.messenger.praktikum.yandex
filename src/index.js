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

// document.getElementById('root').innerHTML = tpl(getRoute());

const comp = Handlebars.compile(tpl);

const res = comp({
  auth: auth({
    loginInput: input('text', 'login', 'Login', 'IvanIvanov'),
    passwordInput: input('password', 'password', 'Password', ''),
    button: button('submit', 'SIGN IN'),
  }),
  registration: registration({
    firstNameInput: input('text', 'first_name', 'First name', 'Ivan'),
    secondNameInput: input('text', 'second_name', 'Second name', 'Ivanov'),
    loginInput: input('text', 'login', 'Login', 'IvanIvanov'),
    emailInput: input('email', 'email', 'Email', 'ivanov@gmail.com'),
    phoneInput: input('tel', 'phone', 'Phone', '+71234567890'),
    passwordInput: input('password', 'password', 'Password'),
    passwordRepeatInput: input('password', 'password', 'Repeat password'),
    button: button('submit', 'SIGN UP'),
  }),
  profile: profile({
    firstNameInput: input('text', 'first_name', 'First name', '', 'Ivan', true),
    secondNameInput: input('text', 'second_name', 'Second name', '', 'Ivanov', true),
    loginInput: input('text', 'login', 'Login', '', 'IvanIvanov', true),
    emailInput: input('email', 'email', 'Email', '', 'ivanov@gmail.com', true),
    phoneInput: input('tel', 'phone', 'Phone', '', '+71234567890', true),
    displayNameInput: input('text', 'display_name', 'Chat name', '', 'Ivan', true),
  }),
  profileEdit: profileEdit({
    firstNameInput: input('text', 'first_name', 'First name', 'Ivan', 'Ivan'),
    secondNameInput: input('text', 'second_name', 'Second name', 'Ivanov', 'Ivanov'),
    loginInput: input('text', 'login', 'Login', 'IvanIvanov', 'IvanIvanov'),
    emailInput: input('email', 'email', 'Email', 'ivanov@gmail.com', 'ivanov@gmail.com'),
    phoneInput: input('tel', 'phone', 'Phone', '+71234567890', '+71234567890'),
    displayNameInput: input('text', 'display_name', 'Chat name', 'Ivan', 'Ivan'),
    button: button('submit', 'Save'),
  }),
  profilePassword: profilePassword({
    oldPasswordInput: input('password', 'oldPassword', 'Old password'),
    newPasswordInput: input('password', 'newPassword', 'New password'),
    newPasswordRepeatInput: input('password', 'newPassword', 'Repeat new password'),
    button: button('submit', 'Save'),
  }),
  serverError: serverError(),
  notFound: notFound(),
  route: getRoute()
})

document.getElementById('root').innerHTML = res;
