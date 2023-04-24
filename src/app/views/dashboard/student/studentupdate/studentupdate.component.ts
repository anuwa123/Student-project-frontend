import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Studentservice } from 'src/app/services/studentservice';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit{
  student:Student=new Student();
  studentId:string;

  constructor( private studentService:Studentservice,private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.studentId=this.route.snapshot.params['studentId'];
    console.log("ssasasas",this.route.snapshot.params['studentId']);
    this.getStudentById(this.studentId)
  }
  
  getStudentById(studentId:string){
    this.studentService.getStudentById(studentId).subscribe(data=>{
    this.student=data;
    console.log("gggggggggg",data)
  },error=>console.log(error));
}
// Update user 

updateStudentById(){
  this.studentService.updateStudentById(this.studentId,this.student).subscribe(data=>{
    console.log(data);
    this.goToUserList();
  },error=>console.log(error))
}
goToUserList(){
  this.router.navigate(['/student']);
}

onSubmit(){
  this.updateStudentById();
  console.log("updated")
}

}
