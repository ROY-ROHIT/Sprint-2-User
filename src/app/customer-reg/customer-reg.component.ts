import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address1 } from '../Address';
import { Customer } from '../cust';
import { User } from '../User';
import { UserRegService } from '../user-reg.service';

@Component({
  selector: 'app-customer-reg',
  templateUrl: './customer-reg.component.html',
  styleUrls: ['./customer-reg.component.css']
})
export class CustomerRegComponent implements OnInit {

  constructor(private builder:FormBuilder,private _serv:UserRegService,private route:Router) { }

  ngOnInit(): void {
  }

  pword:any='^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';
  regForm=this.builder.group({
    firstName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    lastName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
    mobileNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    status:['',Validators.required],
    streetNo:['',Validators.required],
    buildingName:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    country:['',Validators.required],
    pincode:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
    userPassword:['',[Validators.required,Validators.pattern(this.pword)]],
    role:['',Validators.required],
    email:['',[Validators.required,Validators.email]],

  });


  onSubmit()
  {
    let usrId=new User(this.regForm.controls.userPassword.value,this.regForm.controls.role.value,this.regForm.controls.email.value);
    let addId=new Address1(this.regForm.controls.streetNo.value,this.regForm.controls.buildingName.value,this.regForm.controls.city.value,this.regForm.controls.state.value,this.regForm.controls.country.value,this.regForm.controls.pincode.value);
    this._serv.doRegistration(new Customer(usrId,addId,this.regForm.controls.firstName.value,this.regForm.controls.lastName.value,this.regForm.controls.mobileNumber.value,this.regForm.controls.status.value)).subscribe((data)=>{
      console.log(data);
      alert("Customer Has Been Registered!")});;
  }

}
