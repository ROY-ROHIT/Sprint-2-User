import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address1 } from './Address';
import { Customer } from './cust';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private _http:HttpClient) { }

  private baseURL="http://localhost:9090/updatecustomer/";

  public doRegistration(formvalue:Customer):Observable<Object>
  {
    return this._http.post("http://localhost:9090/addcustomer",formvalue);

  }

  public getAllCustomers():Observable<Customer[]>
  {
    return this._http.get<Customer[]>("http://localhost:9090/allcustomers");
  }

  public getAllAddress():Observable<Address1[]>
  {
    return this._http.get<Address1[]>("http://localhost:9090/alladdress");
  }
  public getAllUsers():Observable<User[]>
  {
    return this._http.get<User[]>("http://localhost:9090/allusers");
  }

  public getCustById(id:number):Observable<Customer>
  {
    return this._http.get<Customer>("http://localhost:9090/customer/"+`${id}`);
    // return this._http.get<Customer[]>("http://localhost:9090/customer"+id);
  }

  public deleteCustomer(id:any)
  {
    return this._http.delete("http://localhost:9090/delete/"+`${id}`);
  }

  public updateCustomer(id:number,customer:Customer):Observable<Object>
  {
    return this._http.put(`${this.baseURL}/${id}`,customer);
  }

  public updateAddress(addid:number,addr:Address1):Observable<Object>
  {
    return this._http.put("http://localhost:9090/updateaddress/"+`${addid}`,addr);
  }

  public updateUser(uid:number,usr:User):Observable<Object>
  {
    return this._http.put("http://localhost:9090/updateuser/"+`${uid}`,usr);
  }

  public getAddressById(addid:number):Observable<Address1>
  {
    return this._http.get<Address1>("http://localhost:9090/address/"+`${addid}`);
  }

  public getUserById(uid:number):Observable<User>
  {
    return this._http.get<User>("http://localhost:9090/user/"+`${uid}`);
  }

}

