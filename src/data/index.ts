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

const requirements = {
  login: 'От 3 до 20 символов, латиница, может содержать цифры, ' +
        'но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
  password: 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.',
  name: 'Латиница или кириллица, первая буква должна быть заглавной, ' +
    'без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
  email: 'Латиница, может включать цифры и спецсимволы вроде дефиса, ' +
    'обязательно должна быть «собака» (@) и точка после неё, ' +
    'но перед точкой обязательно должны быть буквы.',
  phone: 'От 10 до 15 символов, состоит из цифр, может начинается с плюса.',
  message: 'Не должно быть пустым.',
}

export const authInputs = [
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov', info: requirements.login },
  { type: 'password', name: 'password', label: 'Password', placeholder: '', info: requirements.password },
];

export const registrationInputs = [
  { type: 'text', name: 'first_name', label: 'First name', placeholder: 'Ivan', info: requirements.name },
  { type: 'text', name: 'second_name', label: 'Second name', placeholder: 'Ivanov', info: requirements.name },
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov', info: requirements.login },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'ivanov@gmail.com', info: requirements.email },
  { type: 'tel', name: 'phone', label: 'Phone', placeholder: '+71234567890', info: requirements.phone },
  { type: 'password', name: 'password', label: 'Password', placeholder: '', info: requirements.password },
  { type: 'password', name: 'password_repeat', label: 'Repeat password', placeholder: '', info: requirements.password },
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
  { type: 'text', name: 'first_name', label: 'First name', placeholder: 'Ivan', value: 'Ivan', info: requirements.name },
  { type: 'text', name: 'second_name', label: 'Second name', placeholder: 'Ivanov', value: 'Ivanov', info: requirements.name },
  { type: 'text', name: 'login', label: 'Login', placeholder: 'IvanIvanov', value: 'IvanIvanov', info: requirements.login },
  { type: 'email', name: 'email', label: 'Email', placeholder: 'ivanov@gmail.com', value: 'ivanov@gmail.com', info: requirements.email },
  { type: 'tel', name: 'phone', label: 'Phone', placeholder: '+71234567890', value: '+71234567890', info: requirements.phone },
  { type: 'text', name: 'display_name', label: 'Chat name', placeholder: 'Ivan', value: 'Ivan', info: requirements.name },
];

export const profilePasswordInputs = [
  { type: 'password', name: 'oldPassword', label: 'Old password', placeholder: '', info: requirements.password },
  { type: 'password', name: 'newPassword', label: 'New password', placeholder: '', info: requirements.password },
  { type: 'password', name: 'newPasswordRepeat', label: 'Repeat new password', placeholder: '', info: requirements.password },
];
