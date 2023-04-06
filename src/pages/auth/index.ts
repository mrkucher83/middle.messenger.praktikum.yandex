import tpl from 'bundle-text:./tpl.hbs';
import Validator from '../../services/Validator';
import './style.scss';
import Input from '../../components/input';
import { authInputs } from '../../data';
import Button from '../../components/button';

export class Auth extends Validator {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      input: this._props.input,
      button: this._props.button,
    });
  }
}

export const auth = new Auth('div', {
  attr: {
    class: 'auth',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: authInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN IN',
  }),
  events: {
    'click': (event: Event) => {
      if (event && (event.target as HTMLFormElement).tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formAuth');
        const formData = new FormData(formElement as HTMLFormElement);

        if (!formData.get('login') || !formData.get('password'))
        {
          alert('Поля не должны быть пустые');
        } else if (Object.keys(auth._validatedInputs).length) {
          alert('Проверьте правильность заполнения полей');
        } else {
          console.log({
            login: formData.get('login'),
            password: formData.get('password'),
          });
        }
      }
    },
    'blur': (event: Event) => auth.validate(event),
    'focus': (event: Event) => auth.validate(event),
  },
});
