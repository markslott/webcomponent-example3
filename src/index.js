import { buildCustomElementConstructor } from 'lwc';
import Contacts from 'my/contacts';

//you need to do this to make this a proper web component
customElements.define('my-contacts', buildCustomElementConstructor(Contacts));

//This is how to use the component without using customElements.define():
//const mycontacts = createElement('my-contacts', { is: Contacts });
//mycontacts.title = "My Contacts";
// eslint-disable-next-line @lwc/lwc/no-document-query
//document.querySelector('#main').appendChild(mycontacts);
