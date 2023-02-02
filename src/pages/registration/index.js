import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from "../../components/input";
import {registrationInputs} from "../../data";
import Button from "../../components/button";
import validateInput from "../../utils/validator";

export class Registration extends Block {
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

export const registration = new Registration('div', {
  attr: {
    class: 'registration',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: registrationInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN UP',
  }),
  events: {
    'click': event => {
      if(event && event.target.tagName === "BUTTON") {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formReg');
        const formData = new FormData(formElement);

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
    },
    'blur': event => validateInput(event),
  },
});
