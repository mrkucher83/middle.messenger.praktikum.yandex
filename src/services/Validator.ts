import Block from './Block';
import validateInput from '../utils/validator';

export default class Validator extends Block {
  _validatedInputs: Record<string, boolean> = {}

  validate(event: Event) {
    const isValid = validateInput(event);

    let target = event.target as HTMLFormElement;

    if (target.name in isValid) {
      this._validatedInputs[target.name] = false;
    } else {
      delete this._validatedInputs[target.name];
    }

    // @ts-ignore
    const elementsError = this._children.input.getContent().querySelectorAll('.input__item');

    elementsError.forEach((el: HTMLFormElement) => {
      let error: HTMLElement | null = document.querySelector(`#error-${el.name}`);

      if(error) {
        error.style.visibility = (el.name in this._validatedInputs)
          ? 'visible'
          : 'hidden';

        let info: HTMLElement | null = document.querySelector(`#info-${el.name}`);
        error.addEventListener('mouseover', () => {
          info!.style.visibility = 'visible';
        })
        error.addEventListener('mouseleave', () => {
          info!.style.visibility = 'hidden';
        })
      }
    });
  }

  _addEvents() {
    this._element?.querySelector('button')?.addEventListener('click', this._props.events.click);
    this._element?.querySelectorAll('input')
      .forEach(input => input.addEventListener('blur', this._props.events.blur, true));
    this._element?.querySelectorAll('input')
      .forEach(input => input.addEventListener('focus', this._props.events.focus));

    super._addEvents();
  }
}
