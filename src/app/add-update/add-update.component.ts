import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address1 } from '../Address';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-add-update',
  template: `
  <div class="container">
  <h2>Update Address Information : </h2> 
  <form (ngSubmit)="onSubmit(upadd.addressId)" #addupd="ngForm" appIdentityRevealed>
    <div class="form-group">
      <label>Street No.</label>
      <input type="text" class="form-control" id="stno" [(ngModel)]="upadd.streetNo" required="true" name="streetNo" #streetNo="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="streetNo?.errors?.required">Street No. is required.</span>
      </span>
    </div>
    <div class="form-group">
      <label>Building Name</label>
      <input type="text" class="form-control" id="bname" [(ngModel)]="upadd.buildingName" required="true" name="buildingName" #buildingName="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="buildingName?.errors?.required">Building Name is required.</span>
      </span>
    </div>
    <div class="form-group">
      <label>City</label>
      <input type="text" class="form-control" id="city" [(ngModel)]="upadd.city" name="city" required="true"  #city="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="city?.errors?.required">City is required.</span>
      </span>
    </div>
    <div class="form-group">
      <label>State</label>
      <input type="text" class="form-control" id="state" [(ngModel)]="upadd.state" name="state"  required="true"  #state="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="state?.errors?.required">State is required.</span>
      </span>
    </div>
    <div class="form-group">
      <label>Country</label>
      <input type="text" class="form-control" id="country" [(ngModel)]="upadd.country" name="country" required="true"  #country="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="country?.errors?.required">Country is required.</span>
      </span>
    </div>
    <div class="form-group">
      <label>Pincode</label>
      <input type="text" class="form-control" id="pin" [(ngModel)]="upadd.pincode" name="pincode" required="true"  #pincode="ngModel">
      <span *ngIf="addupd?.errors || addupd?.touched" class="alert">
        <span *ngIf="country?.errors?.required">Country is required.</span>
      </span>
    </div>
    <div class="modal-footer">
    <button type="Submit" class="btn btn-success" [disabled]="addupd.invalid">Submit</button>
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
export class AddUpdateComponent implements OnInit {

  constructor(private _serv:UserRegService, private route:ActivatedRoute,private router:Router) { }

  id:number=265;
  upadd:Address1=new Address1("","","","","","");

  ngOnInit(): void {

    this._serv.getAddressById(this.id).subscribe(data=>{
      this.upadd=data;
    });
  }

  public onSubmit(addid:number)
  {
    
    this._serv.getAddressById(addid).subscribe(data=>{
      this.upadd=data;

    });
    this._serv.updateAddress(addid,this.upadd).subscribe(data=>{
      alert("Updated Successfully");
      this.router.navigate(['/getid']);
    })
  }

}
