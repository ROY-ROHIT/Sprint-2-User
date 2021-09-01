import { Component, OnInit } from '@angular/core';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {

  constructor(private _serv:UserRegService) { }

  allCust:any;
  searchText:string="";

  ngOnInit(): void {
    this._serv.getAllCustomers().subscribe((data)=>{this.allCust=data;})
  }

}
