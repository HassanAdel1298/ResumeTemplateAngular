import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private DB_url="http://localhost:48190/api/User/"; 
  
  RegisterUser(userdata: any){ 

    return this.http.post( this.DB_url + "Register", userdata );

  }

  LoginUser(userdata: any){ 

    return this.http.post( this.DB_url + "Login", userdata );
    
  }

  VerifyAccount(userdata: any){ 

    return this.http.post( this.DB_url + "VerifyAccount", userdata );
    
  }

  

}
