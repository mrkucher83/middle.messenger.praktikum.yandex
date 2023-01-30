import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default (type, text) => {
  return Handlebars.compile(tpl)({ type, text });
}
