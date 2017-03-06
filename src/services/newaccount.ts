import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewAccount{
    

    constructor(public http:Http){  
    }

    didSubmit(data: any): any{
       console.log(data);
       this.http.post("http://127.0.0.1:8080/account/add",data).subscribe(result=>{
        this.responseHolder(status,result.json());
            return result.json();
       })
    }
    responseHolder(status,response){
        if(response.error){
            console.log("error " + response.error.message);
    }
    else console.log("succes");
}
}