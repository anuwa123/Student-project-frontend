import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Program } from 'src/app/models/Program';
import { Programservice } from 'src/app/services/programservice';

@Component({
  selector: 'app-programupdate',
  templateUrl: './programupdate.component.html',
  styleUrls: ['./programupdate.component.css']
})
export class ProgramupdateComponent implements OnInit {
  program:Program=new Program();
  programId:string;

  constructor( private programService:Programservice,private router:Router,private route:ActivatedRoute){}

  ngOnInit(){
    this.programId=this.route.snapshot.params['programId'];
    console.log("ssasasas",this.route.snapshot.params['programId']);
    this.getProgramById(this.programId)
  }
  getProgramById(programId:string){
    this.programService.getProgramById(programId).subscribe(data=>{
    this.program=data;
    console.log("gggggggggg",data)
  },error=>console.log(error));
  }

  //update user
  updateProgramById(){
    this.programService.updateProgramById(this.programId,this.program).subscribe(data=>{
      console.log(data);
      this.goToProgramList();
    },error=>console.log(error))
  }
  goToProgramList(){
    this.router.navigate(['/program']);
  }
  
  onSubmit(){
    this.updateProgramById();
    console.log("updated")
  }

}
