import { createElement } from 'lwc';
import MyApp from 'my/app';
import Contacts from 'my/contacts';


const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

const mycontacts = createElement('my-contacts', { is: Contacts });
mycontacts.title = "My Contacts";
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(mycontacts);

