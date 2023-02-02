export default function validateInput(event) {
  const regEx = {
    name: new RegExp(/^[A-Z]{1}[-A-z]{1,}|[А-Я]{1}[-А-я]{1,}$/),
    login: new RegExp(/(?=.*[A-Z])|(?=.*[-_])[-_0-9A-Za-z]{3,20}/),
    email: new RegExp(/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/),
    phone: new RegExp(/^([+]?[0-9]{10,15})*$/),
    password: new RegExp(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g),
  }

  if(event && event.target.name === "login") {
    let isValidate = regEx.login.test(event.target.value)
    !isValidate ?
      console.log(event.target.name, ': От 3 символов, латиница, может содержать цифры, ' +
        'без пробелов, без спецсимволов ' +
        '(допустимы дефис и нижнее подчёркивание)') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }

  if(
    event && event.target.name === "first_name" ||
    event.target.name === "second_name" ||
    event.target.name === "display_name"
  ) {
    let isValidate = regEx.name.test(event.target.value)
    !isValidate ?
      console.log(event.target.name, ': Латиница или кириллица, первая буква должна быть заглавной, ' +
        'без пробелов и без цифр, нет спецсимволов (допустим только дефис)') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }

  if(event && event.target.name === "email") {
    let isValidate = regEx.email.test(event.target.value)
    !isValidate ?
      console.log(event.target.name, ': Латиница, может включать цифры и спецсимволы вроде дефиса, ' +
        'обязательно должна быть «собака» (@) и точка после неё, ' +
        'но перед точкой обязательно должны быть буквы') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }

  if(event && event.target.name === "phone") {
    let isValidate = regEx.phone.test(event.target.value)
    !isValidate ?
      console.log(event.target.name, ': От 10 до 15 символов, состоит из цифр, может начинается с плюса') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }

  if(
    event &&
    event.target.name === "password" ||
    event.target.name === "password_repeat" ||
    event.target.name === "oldPassword" ||
    event.target.name === "newPassword" ||
    event.target.name === "newPasswordRepeat"
  ) {
    let isValidate = regEx.password.test(event.target.value)
    !isValidate ?
      console.log(event.target.name, ': От 8 символов, обязательно хотя бы одна заглавная буква и цифра') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }

  if(event && event.target.name === "message") {
    let isValidate = event.target.value;
    !isValidate ?
      console.log(event.target.name, ': Поле не должно быть пустым') :
      console.log(`${event.target.name}: Условия валидации выполнены`);
  }
}
