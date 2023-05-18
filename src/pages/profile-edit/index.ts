import Validator from '../../services/Validator';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';
import Input from '../../components/input';
import { profileEditInputs } from '../../data';
import Button from '../../components/button';
import userController from '../../controllers/UserController';
import { EditProfileModel } from '../../types/userTypes';
import store, { StoreEvents } from '../../store';

export class ProfileEdit extends Validator {
  userData: Array<any>;

  constructor(...args: any[]) {
    super(...args);

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState());
    })
  }

  componentDidMount() {
    this.userData = profileEditInputs.map(el => {
      el.value = this._props.user[el.name]
      return el;
    });
    // @ts-ignore
    this._children.input.setProps({ inputs: this.userData })
  }

  render() {
    return this.compile(tpl, this._props);
  }
}

export const profileEdit = new ProfileEdit('div', {
  attr: {
    class: 'profile-edit-block',
  },
  input: new Input('div', {
    attr: {
      class: 'input',
    },
    inputs: [],
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

        const formElement = document.getElementById('formProfileEdit');
        const formData = new FormData(formElement as HTMLFormElement);

        if (
          !formData.get('first_name')
          || !formData.get('second_name')
          || !formData.get('login')
          || !formData.get('email')
          || !formData.get('phone')
          || !formData.get('display_name')
        )
        {
          alert('Поля не должны быть пустые');
        } else if (Object.keys(profileEdit._validatedInputs).length) {
          alert('Проверьте правильность заполнения полей');
        } else {
          const data = {
            first_name: formData.get('first_name'),
            second_name: formData.get('second_name'),
            login: formData.get('login'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            display_name: formData.get('display_name'),
          }

          userController.editProfile(data as EditProfileModel);
        }
      }
    },
    'blur': (event: Event) => profileEdit.validate(event),
    'focus': (event: Event) => profileEdit.validate(event),
  },
});
