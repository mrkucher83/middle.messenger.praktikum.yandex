// import Handlebars from "handlebars";
import tpl from './index.hbs';
import './style.scss';
import auth from './pages/auth';
import registration from './pages/registration';
import serverError from './pages/500';
import notFound from './pages/404';
import profile from './pages/profile';
import profileEdit from './pages/profile-edit';
import profilePassword from './pages/profile-password';
import chats from './pages/chats';


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

document.getElementById('root').innerHTML = tpl(getRoute());
