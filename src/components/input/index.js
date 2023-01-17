import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('input', tpl);

export default (type, name, placeholder, value, readonly) => {
    return tpl({ type, name, placeholder, value, readonly });
}
