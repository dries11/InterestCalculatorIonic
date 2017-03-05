import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class NewAccount{
    

    constructor(private http:Http){  
    }
    didSubmit(data: any){
       console.log(data)
       this.http.post("http://127.0.0.1:8080/newAccount",data).subscribe(result=>{
        this.responseHolder(status,result.json())
      
       })
    }
    responseHolder(status,response){
        if(response.error){
            console.log("error " + response.error.message);
    }
    else console.log("succes");
}
}