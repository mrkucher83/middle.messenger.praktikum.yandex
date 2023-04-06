import tpl from 'bundle-text:./tpl.hbs';
import Validator from '../../services/Validator';
import './style.scss';
import Input from '../../components/input';
import { registrationInputs } from '../../data';
import Button from '../../components/button';

export class Registration extends Validator {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      input: this._props.input,
      button: this._props.button,
    });
  }
}

export const registration = new Registration('div', {
  attr: {
    class: 'registration',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: registrationInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN UP',
  }),
  events: {
    'click': (event: Event) => {
      if (event && (event.target as HTMLFormElement).tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formReg');
        const formData = new FormData(formElement as HTMLFormElement);

        if (
          !formData.get('first_name')
          || !formData.get('second_name')
          || !formData.get('login')
          || !formData.get('email')
          || !formData.get('phone')
          || !formData.get('password')
          || !formData.get('password_repeat')
        )
        {
          alert('Поля не должны быть пустые');
        } else if (Object.keys(registration._validatedInputs).length) {
          alert('Проверьте правильность заполнения полей');
        } else if (formData.get('password') !== formData.get('password_repeat')) {
          alert('Пароли должны совпадать');
        } else {
          console.log({
            firstName: formData.get('first_name'),
            secondName: formData.get('second_name'),
            login: formData.get('login'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password'),
            passwordRepeat: formData.get('password_repeat'),
          });
        }
      }
    },
    'blur': (event: Event) => registration.validate(event),
    'focus': (event: Event) => registration.validate(event),
  },
});
