export const cards = [
  { userName: 'Alexander111', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 1, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Oleg', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Nastya', date: '10:45', amount: 4, lastMessage: 'The code below ensures that all elements...' },
  { userName: '--Grisha__', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Anton', date: '10:45', amount: 99, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Dmitriy', date: '10:45', amount: 3, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 1, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 0, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 5, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 5, lastMessage: 'The code below ensures that all elements...' },
  { userName: 'Sergey', date: '10:45', amount: 5, lastMessage: 'The code below ensures that all elements...' },
];

export const messages = [
  { owner: '', text: 'Hello world', time: '10:59'},
  { owner: 'me', text: 'Привет, отправил', time: '11:06'},
  { owner: 'me', text: 'Check my new camera))', time: '11:30', image: 'camera.jpg' },
  { owner: '', text: 'Check my new camera))', time: '11:30', image: 'camera.jpg' },
  { owner: 'me', text: 'Check my new camera))', time: '11:30', image: 'camera.jpg' },
  { owner: '', text: 'Привет! Смотри, тут всплыл интересный кусок\n' +
      '          лунной космической истории — НАСА в какой-то момент попросила\n' +
      '          Хассельблад адаптировать модель SWC для полетов на Луну.\n' +
      '          Сейчас мы все знаем что астронавты летали с моделью 500 EL —\n' +
      '          и к слову говоря, все тушки этих камер все еще находятся на\n' +
      '          поверхности Луны, так как астронавты с собой забрали только кассеты\n' +
      '          с пленкой', time: '11:39' },
  { owner: 'me', text: 'Привет! Смотри, тут всплыл интересный кусок\n' +
      '          лунной космической истории — НАСА в какой-то момент попросила\n' +
      '          Хассельблад адаптировать модель SWC для полетов на Луну.\n' +
      '          Сейчас мы все знаем что астронавты летали с моделью 500 EL —\n' +
      '          и к слову говоря, все тушки этих камер все еще находятся на\n' +
      '          поверхности Луны, так как астронавты с собой забрали только кассеты\n' +
      '          с пленкой', time: '11:39' },
  { owner: '', text: 'Привет! Смотри, тут всплыл интересный кусок\n' +
      '          лунной космической истории — НАСА в какой-то момент попросила\n' +
      '          Хассельблад адаптировать модель SWC для полетов на Луну.\n' +
      '          Сейчас мы все знаем что астронавты летали с моделью 500 EL —\n' +
      '          и к слову говоря, все тушки этих камер все еще находятся на\n' +
      '          поверхности Луны, так как астронавты с собой забрали только кассеты\n' +
      '          с пленкой', time: '11:39' },
  { owner: 'me', text: 'Привет! Смотри, тут всплыл интересный кусок\n' +
      '          лунной космической истории — НАСА в какой-то момент попросила\n' +
      '          Хассельблад адаптировать модель SWC для полетов на Луну.\n' +
      '          Сейчас мы все знаем что астронавты летали с моделью 500 EL —\n' +
      '          и к слову говоря, все тушки этих камер все еще находятся на\n' +
      '          поверхности Луны, так как астронавты с собой забрали только кассеты\n' +
      '          с пленкой', time: '11:39' },
];

export const authInputs = [
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov' },
  { type: 'password', name: 'password', label: 'Password', placeholder: '' },
];

export const registrationInputs = [
  { type: 'text', name: 'first_name', label: 'First name', placeholder: 'Ivan' },
  { type: 'text', name: 'second_name', label: 'Second name', placeholder: 'Ivanov' },
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov' },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'ivanov@gmail.com' },
  { type: 'tel', name: 'phone', label: 'Phone', placeholder: '+71234567890' },
  { type: 'password', name: 'password', label: 'Password', placeholder: '' },
  { type: 'password', name: 'password_repeat', label: 'Repeat password', placeholder: '' },
];

export const profileInputs = [
  { type: 'text', name: 'first_name', label: 'First name', placeholder: '', value: 'Ivan', readonly: true },
  { type: 'text', name: 'second_name', label: 'Second name', placeholder: '', value: 'Ivanov', readonly: true },
  { type: 'text', name: 'login', label: 'Login', placeholder: '', value: 'IvanIvanov', readonly: true },
  { type: 'email', name: 'email', label: 'Email', placeholder: '', value: 'ivanov@gmail.com', readonly: true },
  { type: 'tel', name: 'phone', label: 'Phone', placeholder: '', value: '+71234567890', readonly: true },
  { type: 'text', name: 'display_name', label: 'Chat name', placeholder: '', value: 'Ivan', readonly: true },
];

export const profileEditInputs = [
  { type: 'text', name: 'first_name', label: 'First name', placeholder: 'Ivan', value: 'Ivan' },
  { type: 'text', name: 'second_name', label: 'Second name', placeholder: 'Ivanov', value: 'Ivanov' },
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov', value: 'IvanIvanov' },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'ivanov@gmail.com', value: 'ivanov@gmail.com' },
  { type: 'tel', name: 'phone', label: 'Phone', placeholder: '+71234567890', value: '+71234567890' },
  { type: 'text', name: 'display_name', label: 'Chat name', placeholder: 'Ivan', value: 'Ivan' },
];

export const profilePasswordInputs = [
  { type: 'password', name: 'oldPassword', label: 'Old password', placeholder: '' },
  { type: 'password', name: 'newPassword', label: 'New password', placeholder: '' },
  { type: 'password', name: 'newPasswordRepeat', label: 'Repeat new password', placeholder: '' },
];
