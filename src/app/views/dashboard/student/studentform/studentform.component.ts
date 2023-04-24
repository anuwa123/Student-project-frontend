import { Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { Studentservice } from 'src/app/services/studentservice';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit{
  
  student:Student=new Student();
 

  constructor( private studentService:Studentservice,private router:Router){}

  ngOnInit(){ 
   
  }
  saveStudent(){
    this.studentService.saveStudent(this.student).subscribe(data=>{
      console.log(data);
       
      this.goToStudentList();},
      (error)=>{
        console.log("okkkkkkkkkkkkkkkk");
        console.log(error);
        alert("already registerd id"+ error.error.message)});    
  }
  goToStudentList(){
    this.router.navigate(['/student']);
  }
  onSubmit(){
    this.saveStudent();
  }




}
