import {Item} from './sub';

const elem = document.getElementById('output');
const aBook = new Item('はじめてのTypeScript',1980);
aBook.say(elem);