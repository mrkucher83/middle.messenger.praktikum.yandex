import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('card', tpl);

export default (userName, lastMessage, date, amount) => {
  return tpl({ userName, lastMessage, date, amount });
}
