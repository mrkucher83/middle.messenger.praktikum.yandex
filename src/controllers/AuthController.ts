import AuthApi from '../api/AuthApi';
import { SignInModel, SignUpModel } from '../types/userTypes';
import { router } from '../index';
import store from '../store';

const authApi = new AuthApi();

class AuthController {
  signIn(data: SignInModel) {
    authApi.signIn(data)
      .then(res => {
        if (res.status === 200) {
          store.set('isAuthorized', true);
          router.go('/messenger');
          this.getUser()
        }

        if (res.status === 400 || res.status === 401) {
          alert(res.response.reason)
        }

        if (res.status === 500) {
          router.go('/server-error')
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  signUp(data: SignUpModel) {
    authApi.signUp(data)
      .then(res => {
        if (res.status === 200) {
          router.go('/messenger');
        }

        if (res.status === 400 || res.status === 401) {
          alert(res.response.reason)
        }

        if (res.status === 500) {
          router.go('/server-error')
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  getUser() {
    authApi.getUser()
      .then(res => {
        if (res.status === 200) {
          const { response } = res;
          store.set('user', response)
        }

        if (res.status === 400 || res.status === 401) {
          alert(res.response.reason)
        }

        if (res.status === 500) {
          router.go('/server-error')
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  logout() {
    authApi.logout()
      .then(res => {
        if (res.status === 200) {
          store.set('isAuthorized', false);
          router.go('/');
        }

        if (res.status === 400 || res.status === 401) {
          alert(res.response.reason)
        }

        if (res.status === 500) {
          router.go('/server-error')
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }
}

export default new AuthController();
