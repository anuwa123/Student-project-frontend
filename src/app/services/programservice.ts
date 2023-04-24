import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Program } from "../models/Program";

@Injectable({
    providedIn: 'root'
  })

export class Programservice {
    private baseURL     = 'http://localhost:8080/api/program/get?page=';
    private postURL     = 'http://localhost:8080/api/program/save';
    private getByIdURL  = 'http://localhost:8080/api/program/getById/';
    private updateURL   = 'http://localhost:8080/api/program/updateById/';
    private deleteURL   = 'http://localhost:8080/api/program/deleteById/';
    private searchURL   =  'http://localhost:8080/api/program/search?keyword=';
    private programURL  =  'http://localhost:8080/api/program/view';
    constructor(private httpClient:HttpClient){}

    getAllProgram(page:number):Observable<any[]>{
        return this.httpClient.get<any[]>(this.baseURL+(page-1));
      }
    saveProgram(program:Program):Observable<object>{
        return this.httpClient.post(this.postURL,program);
      }
    getProgramById (programId:string):Observable<Program>{
        return this.httpClient.get<Program>(this.getByIdURL+programId)
      }
    updateProgramById(programId:string ,program:Program):Observable<object>{
        return this.httpClient.put(this.updateURL+programId,program)
      } 
    deleteProgramById(programId:string):Observable<object>{
        return this.httpClient.delete(this.deleteURL+programId)
      }
    searchProgram(programId:string):Observable<Program[]>{
        return this.httpClient.get<Program[]>(this.searchURL+programId)
      }
    getProgramList():Observable<Program[]>{
        return this.httpClient.get<Program[]>(this.programURL);
      }

}
