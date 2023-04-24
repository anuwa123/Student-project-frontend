import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student';
import { Observable,} from 'rxjs';
import { StudentRegister } from '../models/student-register';

@Injectable({
    providedIn: 'root'
  })

export class Studentservice {
    private baseURL         = 'http://localhost:8080/api/student/get?page=';
    private postURL         = 'http://localhost:8080/api/student/save';
    private getByIdURL      = 'http://localhost:8080/api/student/getById/';
    private updateURL       = 'http://localhost:8080/api/student/updateById/';
    private deleteURL       = 'http://localhost:8080/api/student/deleteById/';
    private studentAssigURL = 'http://localhost:8080/api/assignStudent';
    private searchURL       =  'http://localhost:8080/api/student/search?keyword=';
    

    constructor(private httpClient:HttpClient){}

    getAllStudent(page:number):Observable<any[]>{
        return this.httpClient.get<any[]>(this.baseURL+(page-1));
      }
    saveStudent(student:Student):Observable<object>{
        return this.httpClient.post(this.postURL,student);
      }
    getStudentById (studentId:string):Observable<Student>{
        return this.httpClient.get<Student>(this.getByIdURL+studentId)
      }
    updateStudentById(studentId:string ,student:Student):Observable<object>{
        return this.httpClient.put(this.updateURL+studentId,student)
      } 
    deleteStudentById(studentId:string):Observable<object>{
        return this.httpClient.delete(this.deleteURL+studentId)
      }
    assignStudentById(studentRegister:StudentRegister):Observable<object>{
        return this.httpClient.post(this.studentAssigURL,studentRegister);
      }
    searchStudent(studentId:string):Observable<Student[]>{
      return this.httpClient.get<Student[]>(this.searchURL+studentId)
    }        
    }
    
    

