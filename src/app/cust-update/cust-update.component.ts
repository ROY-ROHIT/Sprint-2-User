import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address1 } from '../Address';
import { Customer } from '../cust';
import { User } from '../User';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-cust-update',
  template: `
  <div class="container">
  <h2> Update Customer Profile</h2>
  <form (ngSubmit)="onSubmit()" #custupd="ngForm" appIdentityRevealed>
  <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" id="fName" [(ngModel)]="upcust.firstName" name="firstName" minlength="3" maxlength="10" required="true"  #firstName="ngModel">
      <span *ngIf="custupd?.errors || custupd?.touched" class="alert">
      <span *ngIf="firstName?.errors?.required">First Name is required.</span>
      <span *ngIf="firstName?.errors?.minlength">First Name should be of minimum 3 letters.</span>
      <span *ngIf="firstName?.errors?.maxlength">First Name should be of maximum 10 letters.</span>
    </span>
  </div>
  <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" id="lName" [(ngModel)]="upcust.lastName" name="lastName"  minlength="3" maxlength="10" required="true"  #lastName="ngModel">
      <span *ngIf="custupd?.errors || custupd?.touched" class="alert">
      <span *ngIf="lastName?.errors?.required">Last Name is required.</span>
      <span *ngIf="lastName?.errors?.minlength">Last Name should be of minimum 3 letters.</span>
      <span *ngIf="lastName?.errors?.maxlength">Last Name should be of maximum 10 letters.</span>
    </span>
  </div>
  <div class="form-group">
      <label>Mobile Number</label>
      <input type="text" class="form-control" id="num" [(ngModel)]="upcust.mobileNumber" name="mobileNumber" minlength="10" maxlength="10" required="true"  #mobileNumber="ngModel">
      <span *ngIf="custupd?.errors || custupd?.touched" class="alert">
      <span *ngIf="mobileNumber?.errors?.required">Mobile Number is required.</span>
      <span *ngIf="mobileNumber?.errors?.minlength">Mobile Number should be of minimum 10 letters.</span>
      <span *ngIf="mobileNumber?.errors?.maxlength">Mobile Number should be of maximum 10 letters.</span>
    </span>
  </div>
  <div class="form-group">
    <label>Status</label>
    <input type="text" class="form-control" id="status" [(ngModel)]="upcust.status" name="status"  required="true"  #status="ngModel">
    <span *ngIf="custupd?.errors || custupd?.touched" class="alert">
        <span *ngIf="status?.errors?.required">Status is required.</span>
      </span>
  </div>
  <div class="modal-footer">
    <button type="Submit" class="btn btn-success" [disabled]="custupd.invalid">Submit</button>
  </div>
</form>
</div>

  `,
  styles: [
    `
  h1{
    font-style:bold;
  }
  input.ng-invalid{
    border-left:5px solid red;
}
input.ng-valid{
    border-left: 5px solid green;
}
.cross-validation-error input {
  border-left: 5px solid #a94442;
}
.alert{
  color:red;
}

`
  ]
})
export class CustUpdateComponent implements OnInit {

  constructor(private _serv:UserRegService,private route:ActivatedRoute,private router:Router) { }
  id:number=264;
  usr:User=new User("","","");
  addr:Address1=new Address1("","","","","","");
  upcust:Customer=new Customer(this.usr,this.addr,"","",0,"");

  ngOnInit(): void {
    this._serv.getCustById(this.id).subscribe(data=>{this.upcust=data;
      // console.log(data);
    });
  }


  public onSubmit()
  {
    this._serv.getCustById(this.id).subscribe(data=>{
      this.upcust=data;
    });
    this._serv.updateCustomer(this.id,this.upcust).subscribe(data=>{
      alert("Updated Successfully");
      this.router.navigate(['/getid']);
    })
    
  }

}
