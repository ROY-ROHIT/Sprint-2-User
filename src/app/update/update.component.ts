import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address1 } from '../Address';
import { Customer } from '../cust';
import { User } from '../User';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _serv:UserRegService, private route: ActivatedRoute,
    private router: Router) { }

    id:number=264;
    usr:User=new User("","","");
    addr:Address1=new Address1("","","","","","");
   cust:Customer=new Customer(this.usr,this.addr,"","",0,"");
   del:Customer=new Customer(this.usr,this.addr,"","",0,"");

  ngOnInit(): void {

    this._serv.getCustById(this.id).subscribe(data=>{this.cust=data;
      // console.log(data);
    });
  }

  public delCustomer()
  {
    this._serv.deleteCustomer(this.id).subscribe((data:any)=>{this.del=data;});
    alert("Customer Has Been Succesfully Deleted!");
  }

  public goToCustupd()
  {
    this.router.navigate(['/updatecustomer']);
  }

  public goToAddupd()
  {
    this.router.navigate(['/updateaddress']);
  }

  public goToUserupd()
  {
    this.router.navigate(['/updateuser']);
  }

}
