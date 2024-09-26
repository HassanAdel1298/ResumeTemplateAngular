import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private DB_url="https://localhost:44372/api/User/"; 
  
  RegisterUser(Registerdata: any){ 

    return this.http.post( this.DB_url + "Register", Registerdata );

  }

  LoginUser(Logindata: any){ 

    return this.http.post( this.DB_url + "Login", Logindata );
    
  }

  VerifyAccount(Verifydata: any){ 

    return this.http.post( this.DB_url + "VerifyAccount", Verifydata );
    
  }

  

}
