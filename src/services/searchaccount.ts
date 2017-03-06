import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SearchAccountService{

    serverUrl : any;

constructor(public http:Http){  
    }

    didSubmit(data: any): any{
        this.serverUrl = "http://localhost:8080/account/" + data;
        this.http.post(this.serverUrl,data).subscribe(result=>{
        this.responseHolder(status,result.json());
            console.log(result.json());
            return result.json();
       })
    }

    responseHolder(status,response){
        if(response.error){
            console.log("error " + response.error.message);
    }
        else console.log("success");
        return "success";
    }
}