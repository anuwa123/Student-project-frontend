import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from 'src/app/models/Program';
import { Programservice } from 'src/app/services/programservice';

@Component({
  selector: 'app-programform',
  templateUrl: './programform.component.html',
  styleUrls: ['./programform.component.css']
})

export class ProgramformComponent implements OnInit {
  program:Program=new Program();

  constructor( private programService:Programservice, private router:Router){}

  ngOnInit() {  
  }

  saveProgram(){
    this.programService.saveProgram(this.program).subscribe(data=>{
      console.log(data);
       
      this.goToProgramList();},
      (error)=>{
        console.log("okkkkkkkkkkkkkkkk");
        console.log(error);
        alert("already registerd id "+ error.error.message)});    
  }
  goToProgramList(){
    this.router.navigate(['/program']);
  }
  onSubmit(){
    this.saveProgram();
  }
}
