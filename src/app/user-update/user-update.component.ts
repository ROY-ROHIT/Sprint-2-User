import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-user-update',
  template: `
  <br/>
  <div class="container">
  <h1> Update User Profile</h1>

  <form (ngSubmit)="onSubmit(upusr.userID)" #usrupd="ngForm" appIdentityRevealed>
    <div class="form-group">
      <label>Password</label>
      <input type="text" class="form-control" id="pass" [(ngModel)]="upusr.userPassword" name="userPassword" required="true"  pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$" #userPassword="ngModel">
      <span *ngIf="usrupd?.errors || usrupd?.touched" class="alert">
        <span *ngIf="userPassword?.errors?.required">Password is required.</span>
        <span *ngIf="userPassword?.errors?.pattern">Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.</span>
      </span>
    </div>
    <div class="form-group">
      <label>Role</label>
      <select id="role" class="form-select" [(ngModel)]="upusr.role" required="true"  name="role">
        <option selected>Customer</option>
      </select>
    </div>
    <div class="form-group">
      <label>Email ID</label>
      <input type="text" class="form-control" id="email" required="true" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" [(ngModel)]="upusr.email"  name="email" #email="ngModel">
      <span *ngIf="usrupd?.errors || usrupd?.touched" class="alert">
        <span *ngIf="email?.errors?.required">Email is required.</span>
        <span *ngIf="email?.errors?.pattern">Email should be of the form something@gmail.com</span>
      </span>
    </div>
    <div class="modal-footer">
      <button type="Submit" class="btn btn-success" [disabled]="usrupd.invalid">Submit</button>
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
export class UserUpdateComponent implements OnInit {

  constructor(private _serv:UserRegService,private route:ActivatedRoute,private router:Router) { }

  id:number=266;
  upusr:User=new User("","","");

  ngOnInit(): void {

    this._serv.getUserById(this.id).subscribe(data=>{
      this.upusr=data;
    });
  }

  public onSubmit(usrid:number)
  {
    this._serv.getUserById(usrid).subscribe(data=>{
          this.upusr=data;
          // console.log(this.upusr);
        });
        this._serv.updateUser(usrid,this.upusr).subscribe(data=>{
          alert("Updated Succesfully")
          this.router.navigate(['/getid']);
        })
  }



}
