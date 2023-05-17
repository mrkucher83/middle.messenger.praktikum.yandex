import ChatsApi from '../api/ChatsApi';
import store from '../store';
import { createChatModel } from '../types/chatTypes';
import { router } from '../index';

const chatsApi = new ChatsApi();

class ChatsController {
  getList() {
    chatsApi.getList()
      .then(res => {
        if (res.status === 200) {
          const { response } = res;
          store.set('chatsList', response);
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

  createChat(data: createChatModel) {
    chatsApi.createChat(data)
      .then(res => {
        if (res.status === 200) {
          this.getList();
        }

        if (res.status === 400 || res.status === 401) {
          alert(res.response.reason)
        }

        if (res.status === 500) {
          router.go('/server-error')
        }
      })
  }

  addUser(userId: number, chatId: number) {
    const data = {
      users: [userId],
      chatId,
    }
    chatsApi.addUser(data)
      .then(res => {
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

  deleteUser(userId: number, chatId: number) {
    const data = {
      users: [userId],
      chatId,
    }

    chatsApi.deleteUser(data)
      .then(res => {
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

export default new ChatsController();
