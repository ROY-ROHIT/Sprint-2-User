import { Address1 } from "./Address";
import { User } from "./User";

export class Customer
{
    customerId:number=0;
    firstName: string="";
    lastName: string="";
    mobileNumber: number=0;
    status: string="";
    address:Address1;
    user:User;


    constructor(user:User,address:Address1,firstName:string,lastName:string,mobileNumber:number,status:string){
        this.user=user;
        this.address=address;
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobileNumber=mobileNumber;
        this.status=status;
    }

 }