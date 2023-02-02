import Block from "../../services/Block";
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from "../../components/input";
import {authInputs} from "../../data";
import Button from "../../components/button";
import validateInput from "../../utils/validator";

export class Auth extends Block {
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

export const auth = new Auth('div', {
  attr: {
    class: 'auth',
  },
  input: new Input('div', {
    attr: {
      class: 'input'
    },
    inputs: authInputs,
  }),
  button: new Button('div', {
    type: 'submit',
    text: 'SIGN IN',
  }),
  events: {
    'click': event => {
      if(event && event.target.tagName === "BUTTON") {
        event.preventDefault();
        event.stopPropagation();

        const formElement = document.getElementById('formAuth');
        const formData = new FormData(formElement);

        console.log({
          login: formData.get('login'),
          password: formData.get('password'),
        });
      }
    },
    'blur': event => validateInput(event),
  },
});
