import HTTPTransport from '../services/fetch';
import { EditProfileModel, EditPasswordModel } from '../types/userTypes';

const userApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/user');

class UserApi {
  editProfile(data: EditProfileModel) {
    return userApiInstance.put('/profile', { data });
  }

  editAvatar(data: FormData) {
    return userApiInstance.put('/profile/avatar', { data });
  }

  editPassword(data: EditPasswordModel) {
    return userApiInstance.put('/password', { data });
  }
}

export default UserApi;
