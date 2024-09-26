import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly DB_URL = "https://localhost:44372/api/Experience/";

  constructor(private readonly myClient:HttpClient) { }

  CreateExperience(Experience:any){
    return this.myClient.post(this.DB_URL+"CreateExperience",Experience);
  }

  GetAllExperiencesByUser(Pagination:any){
    return this.myClient.post(this.DB_URL+"GetAllExperiencesByUser",Pagination);
  }

  DeleteExperience(ExperienceID:any){
    return this.myClient.delete(this.DB_URL+"DeleteExperience",ExperienceID);
  }

  UpdateExperience(Experience:any){
    return this.myClient.put(this.DB_URL+"UpdateExperience",Experience);
  }

}
