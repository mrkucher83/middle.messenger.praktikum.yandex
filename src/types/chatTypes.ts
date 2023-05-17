export interface chatListModel {
  offset?: number;
  limit?: number;
  title?: string;
}

export interface createChatModel {
  title: string;
}

export interface addUserModel {
  users: Array<number>;
  chatId: number;
}

export interface deleteUserModel {
  users: Array<number>;
  chatId: number;
}
