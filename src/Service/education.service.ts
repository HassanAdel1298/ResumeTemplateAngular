import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private readonly DB_URL = "https://localhost:44372/api/Education/";

  constructor(private readonly myClient:HttpClient) { }

  CreateEducation(Education:any){
    return this.myClient.post(this.DB_URL+"CreateEducation",Education);
  }

  GetAllEducationsByUser(Pagination:any){
    return this.myClient.post(this.DB_URL+"GetAllEducationsByUser",Pagination);
  }

  DeleteEducation(EducationID:any){
    return this.myClient.delete(this.DB_URL+"DeleteEducation",EducationID);
  }

  UpdateEducation(Education:any){
    return this.myClient.put(this.DB_URL+"UpdateEducation",Education);
  }
}
