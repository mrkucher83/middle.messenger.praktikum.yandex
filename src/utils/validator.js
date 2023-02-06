export default function validateInput(event) {
  const result = {};

  const regEx = {
    first_name: /^[A-Z]{1}[-A-z]{1,}|[А-Я]{1}[-А-я]{1,}$/,
    second_name: /^[A-Z]{1}[-A-z]{1,}|[А-Я]{1}[-А-я]{1,}$/,
    display_name: /^[A-Z]{1}[-A-z]{1,}|[А-Я]{1}[-А-я]{1,}$/,
    login: /(?=.*[A-Z])|(?=.*[-_])[-_0-9A-Za-z]{3,20}/,
    email: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
    phone: /^([+]?[0-9]{10,15})*$/,
    password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
    oldPassword: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
    newPassword: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
    newPasswordRepeat: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
    password_repeat: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,40}/g,
  };

  if(!regEx[event.target.name].test(event.target.value)) {
    result[event.target.name] = false;
  }

  return result;
}
