import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from "../../components/input";
import {profilePasswordInputs} from "../../data";
import Button from "../../components/button";

export  class ProfilePassword extends Block {
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
    }
  },
});
