import { LightningElement, api } from 'lwc';
import fetchDataHelper from './fetchDataHelper.js';

export default class Contacts extends LightningElement {
    @api title;
    data = [];

    //standard web component lifecycle hook
    //in connectedCallback we retrieve data and render it
    connectedCallback() {
        this.getData();
    }

    refresh() {
        this.getData();
    }

    rowClicked(event) {
        this.dispatchEvent(
            new CustomEvent('contactrowclicked', {
                detail: event.target.innerHTML,
                bubbles: true,
                composed: true
            })
        );
    }

    async getData() {
        const data = await fetchDataHelper({ amountOfRecords: 10 });
        this.data = data;
        console.log(data);
    }
}
