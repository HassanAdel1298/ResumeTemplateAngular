import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly DB_URL = "http://localhost:48190/api/Skill";

  constructor(private readonly myClient:HttpClient) { }

  CreateSkill(Skill:any){
    return this.myClient.post(this.DB_URL+"/CreateSkill",Skill);
  }

  GetAllSkills(Pagination:any){
    return this.myClient.post(this.DB_URL+"/GetAllSkills",Pagination);
  }

  GetAllSkillsByUser(Pagination:any){
    return this.myClient.post(this.DB_URL+"/GetAllSkillsByUser",Pagination);
  }

  DeleteSkillForUser(SkillID:any){
    return this.myClient.delete(this.DB_URL+"/DeleteSkillForUser/"+SkillID);
  }
  
}
