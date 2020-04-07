import { LightningElement, api } from 'lwc';
import fetchDataHelper from './fetchDataHelper.js';

export default class Contacts extends LightningElement {
    @api title;
    data = [];

    //in connectedCallback we retrieve data end render it
    connectedCallback() {
        this.getData();
    }

    refresh() {
        this.getData();
    }

    async getData() {
        const data = await fetchDataHelper({ amountOfRecords: 10 });
        this.data = data;
        console.log(data);
    }
}
