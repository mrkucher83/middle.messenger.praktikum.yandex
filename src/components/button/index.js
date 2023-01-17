import Handlebars from 'handlebars';
import tpl from './tpl.hbs';
import './style.scss';

Handlebars.registerPartial('button', tpl);

export default (text) => {
    return tpl({ text });
}
