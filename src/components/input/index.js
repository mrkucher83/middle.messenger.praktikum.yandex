import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

export default (type, name, label, placeholder, value, readonly) => {
  return Handlebars.compile(tpl)({ type, name, label, placeholder, value, readonly });
}
