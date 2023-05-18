import UserApi from '../api/UserApi';
import {EditAvatarModel, EditPasswordModel, EditProfileModel} from '../types/userTypes';
import store from '../store';
import { router } from '../index';

const userApi = new UserApi();

class UserController {
  editProfile(data: EditProfileModel) {
    userApi.editProfile(data)
      .then(res => {
        if (res.status === 200) {
          const { response } = res;
          store.set('user', response)
          router.go('/profile');
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

  editAvatar(data: EditAvatarModel) {
    userApi.editAvatar(data)
      .then(res => {
        if (res.status === 200) {
          const { response } = res;
          store.set('user.avatar', response.avatar)
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

  editPassword(data: EditPasswordModel) {
    userApi.editPassword(data)
      .then(res => {
        if (res.status === 200) {
          alert('Пароль успешно изменен');
          router.go('/profile');
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

export default new UserController();
