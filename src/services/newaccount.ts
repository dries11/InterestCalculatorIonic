import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewAccountService{
    

    constructor(public http:Http){  
    }

    didSubmit(data: any): any{
       console.log(data);
       this.http.post("http://localhost:8080/account/add",data).subscribe(result=>{
        this.responseHolder(status,result.json());
            return result.json();
       })
    }

    responseHolder(status,response){
        if(response.error){
            console.log("error " + response.error.message);
    }
        else console.log("success");
    }
}