import Handlebars from "handlebars";
import tpl from './tpl.hbs';
import './style.scss';

import card from '../../components/card';
import message from '../../components/message';

Handlebars.registerPartial('chats', tpl);

export default (props = {}) => {
    return tpl(props);
}
