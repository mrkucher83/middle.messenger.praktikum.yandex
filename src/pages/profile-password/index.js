import Block from '../../services/Block';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from '../../components/input';
import { profilePasswordInputs } from '../../data';
import Button from '../../components/button';
import validateInput from '../../utils/validator';

export class ProfilePassword extends Block {
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

export const profilePassword = new ProfilePassword('div', {
  attr: {
    class: 'profile-password',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: profilePasswordInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'Save',
  }),
  events: {
    'click': event => {
      if (event && event.target.tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formPassword');
        const formData = new FormData(formElement);

        if (
          !formData.get('oldPassword')
          || !formData.get('newPassword')
          || !formData.get('newPasswordRepeat')
        )
        {
          alert('Поля не должны быть пустые');
        } else if (Object.keys(profilePassword._validatedInputs).length) {
          alert('Проверьте правильность заполнения полей');
        } else if (formData.get('newPassword') !== formData.get('newPasswordRepeat')) {
          alert('Пароли должны совпадать');
        } else {
          console.log({
            oldPassword: formData.get('oldPassword'),
            newPassword: formData.get('newPassword'),
            newPasswordRepeat: formData.get('newPasswordRepeat'),
          });
        }
      }
    },
    'blur': event => profilePassword.validate(event),
    'focus': event => profilePassword.validate(event),
  },
});
