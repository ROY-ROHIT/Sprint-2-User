export class Address1
 {
    addressId:number=0;
    streetNo: string="";
    buildingName: string="";
    city:string="";
    state: string="";
    country: string="";
    pincode:string="";

    constructor(streetNo:string,buildingName:string,city:string,state:string,country:string,pincode:string){
       this.streetNo=streetNo;
       this.buildingName=buildingName;
       this.city=city;
       this.state=state;
       this.country=country;
       this.pincode=pincode;
    }
 }