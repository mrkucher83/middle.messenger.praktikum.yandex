import Validator from '../../services/Validator';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from '../../components/input';
import { profilePasswordInputs } from '../../data';
import Button from '../../components/button';

export class ProfilePassword extends Validator {
  render() {
    return this.compile(tpl, {
      attr: this._props.attr,
      input: this._props.input,
      button: this._props.button,
    });
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
    'click': (event: Event) => {
      if (event && (event.target as HTMLFormElement).tagName === 'BUTTON') {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formPassword');
        const formData = new FormData(formElement as HTMLFormElement);

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
    'blur': (event: Event) => profilePassword.validate(event),
    'focus': (event: Event) => profilePassword.validate(event),
  },
});
