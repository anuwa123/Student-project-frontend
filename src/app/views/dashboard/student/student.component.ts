import { Component, Injectable, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Studentservice } from 'src/app/services/studentservice';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
@Injectable()
export class StudentComponent implements OnInit{
  students:any[];
  student:Student=new Student();
  totalElement:any;
  pageSize:any;
  totalPage:any;
  page: number = 0;


  
  constructor( private studentService:Studentservice, private router:Router){}
  
  ngOnInit(){
    this.getAllStudent(this.page);

  }
   getAllStudent(page:number){
    console.log("huuuuuuuuu",page);
    this.studentService.getAllStudent(page).subscribe((data:any)=>{
      console.log("hahahahaha",page);
      this.students=data.content;
      this.pageSize=data.pagination.size;
      this.totalPage=data.pagination.totalPages;
      this.totalElement=data.pagination.totalElements;
      this.page=data.pagination.page+1;
    });
  }
  navigateToUpdateForm(studentId:string){
    this.router.navigate(['student/updatestudent',studentId])
  }
  deleteStudentById(studentId:string){
    this.studentService.deleteStudentById(studentId).subscribe(data=>{
      console.log(data);
      console.log("delete student")
      this.getAllStudent(this.page);
      
    })
  }
  navigateToAssignStudentForm(studentId:string){
    this.router.navigate(['student/assingstudent',studentId])
  }
  searchStudent(event:any){
    console.log("search button",event.target.value);
    this.studentService.searchStudent(event.target.value).subscribe(data=>{
      console.log("ffffffffffffff",data)
      this.students=data;
    })
  }
  searchStudentOnClick(event:any){
    console.log("search button click",event);
    this.studentService.searchStudent(event).subscribe(data=>{
      console.log("ffffffffffffff",data)
      this.students=data;
    })
  }
  onPaginationClick(page:number){
    this.getAllStudent(page);
  }

}


