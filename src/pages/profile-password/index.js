import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from "../../components/input";
import {profilePasswordInputs} from "../../data";
import Button from "../../components/button";
import validateInput from "../../utils/validator";

export  class ProfilePassword extends Block {
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

export const profilePassword = new ProfilePassword('div', {
  attr: {
    class: 'profile-password',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: profilePasswordInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'Save',
  }),
  events: {
    'click': event => {
      if(event && event.target.tagName === "BUTTON") {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formPassword');
        const formData = new FormData(formElement);

        console.log({
          oldPassword: formData.get('oldPassword'),
          newPassword: formData.get('newPassword'),
          newPasswordRepeat: formData.get('newPasswordRepeat'),
        });
      }
    },
    'blur': event => validateInput(event),
  },
});
