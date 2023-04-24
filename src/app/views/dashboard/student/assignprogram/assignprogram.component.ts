import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Program } from 'src/app/models/Program';
import { Student } from 'src/app/models/Student';
import { StudentRegister } from 'src/app/models/student-register';
import { Programservice } from 'src/app/services/programservice';
import { Studentservice } from 'src/app/services/studentservice';

@Component({
  selector: 'app-assignprogram',
  templateUrl: './assignprogram.component.html',
  styleUrls: ['./assignprogram.component.css']
})

export class AssignprogramComponent implements OnInit{
  student:Student=new Student();
  studentId:string;
  program:Program=new Program();
  programList:Program[];
  programId:string;
  studentRegister:StudentRegister=new StudentRegister();

  constructor(private studentService:Studentservice,private router:Router,private route:ActivatedRoute ,private programService:Programservice){}

  ngOnInit(){
    this.studentId=this.route.snapshot.params['studentId'];
    this.studentRegister.studentId=this.studentId;
    console.log("ss",this.studentId);
    this.getProgramList();
  }
  assignStudentById(request:any){
    
    // request.studentId =this.studentId;
    this.studentService.assignStudentById(request).subscribe(data=>{
      console.log(data);
    },error=>console.log(error))
  }
  onSubmit(){
    this.assignStudentById(this.studentRegister);
    console.log("saved")
  }
  getProgramList(){
    this.programService.getProgramList().subscribe(data=>{
      console.log("okkkkkkkkkkkkkkkkk",data);
      this.programList=data;
    })  
  }
  getProgramId(id:any){
    this.studentRegister.programId=id;
  }

}
