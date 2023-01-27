import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('message', tpl);

export default (owner, text, time) => {
  return tpl({ owner, text, time });
}
