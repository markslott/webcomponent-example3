import { LightningElement, api } from 'lwc';
import fetchDataHelper from './fetchDataHelper.js';

export default class Contacts extends LightningElement {

    @api title;

    //in connectedCallback we retrieve data end render it
    connectedCallback() {
        this.getData();
    }

    refresh() {
        this.getData();
    }

    async getData() {
        const data = await fetchDataHelper({amountOfRecords : 10});
        this.data = data;
        console.log(data);
        this.renderTable();
    }

    renderTable() {
        var table = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Amount</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>`;
        this.data.forEach((item) => {
           let row = "<tr>";
           row += "<td>"+item.name+"</td>";
           row += "<td>"+item.email+"</td>";
           row += "<td>"+item.website+"</td>";
           row += "<td>"+item.amount+"</td>";
           row += "<td>"+item.phone+"</td>";
           row += "</tr>";
           table += row;
        });
        table += "</tbody>";
        // eslint-disable-next-line @lwc/lwc/no-inner-html
        this.template.querySelector('.datatable').innerHTML = table;
    }


}
