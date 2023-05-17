import HTTPTransport from '../services/fetch';
import { SignInModel, SignUpModel } from '../types/userTypes';

const authApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/auth');

class AuthApi {
  signUp(data: SignUpModel) {
    return authApiInstance.post('/signup', { data });
  }

  signIn(data: SignInModel) {
    return authApiInstance.post('/signin', { data });
  }

  getUser() {
    return authApiInstance.get('/user');
  }

  logout() {
    return authApiInstance.post('/logout');
  }
}

export default AuthApi;
