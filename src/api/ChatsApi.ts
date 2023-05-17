import HTTPTransport from '../services/fetch';
import {
  // chatListModel,
  createChatModel,
  addUserModel,
  deleteUserModel } from '../types/chatTypes';

const chatsApiInstance = new HTTPTransport('https://ya-praktikum.tech/api/v2/chats');

class ChatsApi {
  getList() {
    return chatsApiInstance.get('');
  }

  createChat(data: createChatModel) {
    return chatsApiInstance.post('', { data });
  }

  addUser(data: addUserModel) {
    return chatsApiInstance.put('/users', { data });
  }

  deleteUser(data: deleteUserModel) {
    return chatsApiInstance.delete('/users', { data });
  }
}

export default ChatsApi;
