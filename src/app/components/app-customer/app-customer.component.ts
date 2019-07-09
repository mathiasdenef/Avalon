import { Component } from '@angular/core';
import { Customer } from '../../models/customer';
import { Column } from '../../models/column';
import { CustomerService } from '../../services/customer.service';

@Component({
    selector: 'app-customer',
    templateUrl: './app-customer.component.html',
    styleUrls: ['./app-customer.component.css']
})
export class AppCustomerComponent  {

    customers: Customer[];
    cols: Column[];

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getAllCustomers().subscribe(
            res => {
                console.log(res);
                this.customers = res;
            }
        )

        this.cols = [
            {
                field: "id",
                header: "Id"
            },
            {
                field: "name",
                header: "Name"
            }
        ]
    }
}
