import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.scss';
import input from '../../components/input';
import button from '../../components/button';

Handlebars.registerPartial('profileEdit', tpl);

export default (props = {}) => {
    return tpl(props);
}