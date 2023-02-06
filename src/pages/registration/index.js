import tpl from 'bundle-text:./tpl.hbs';
import Block from '../../services/Block';
import './style.scss';
import Input from '../../components/input';
import { registrationInputs } from '../../data';
import Button from '../../components/button';
import validateInput from '../../utils/validator';

export class Registration extends Block {
  _validatedInputs = {}

  validate(event) {
    const isValid = validateInput(event);

    if (event.target.name in isValid) {
      this._validatedInputs[event.target.name] = false;
    } else {
      delete this._validatedInputs[event.target.name];
    }

    const elementsError = this._children.input.getContent().querySelectorAll('.input__item');

    elementsError.forEach(el => {
      let error = document.querySelector(`#error-${el.name}`);

      error.style.visibility = (el.name in this._validatedInputs)
        ? 'visible'
        : 'hidden';
    });
  }

  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      input: this._props.input,
      button: this._props.button,
    });
  }

  _addEvents() {
    this._element.querySelector('button').addEventListener('click', this._props.events.click);
    this._element.querySelectorAll('input')
      .forEach(input => input.addEventListener('blur', this._props.events.blur, true));
    this._element.querySelectorAll('input')
      .forEach(input => input.addEventListener('focus', this._props.events.focus));

    super._addEvents();
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
    'click': event => {
      if (event && event.target.tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formReg');
        const formData = new FormData(formElement);

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
    'blur': event => registration.validate(event),
    'focus': event => registration.validate(event),
  },
});
