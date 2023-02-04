import Block from '../../services/Block';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from '../../components/input';
import { profileEditInputs } from '../../data';
import Button from '../../components/button';
import validateInput from '../../utils/validator';

export class ProfileEdit extends Block {
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

    super._addEvents();
  }
}

export const profileEdit = new ProfileEdit('div', {
  attr: {
    class: 'profile-edit',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: profileEditInputs,
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

        const formElement = document.getElementById('formProfileEdit');
        const formData = new FormData(formElement);

        console.log({
          firstName: formData.get('first_name'),
          secondName: formData.get('second_name'),
          login: formData.get('login'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          chatName: formData.get('display_name'),
        });
      }
    },
    'blur': event => validateInput(event),
  },
});
