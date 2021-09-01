export class User{
    userID:number=0;
    userPassword:string="";
    role: string="";
    email:string="";

    constructor(userPassword:string,role:string,email:string){
      this.userPassword=userPassword;
      this.role=role;
      this.email=email;
    }
  }