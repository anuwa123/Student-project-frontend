import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Program } from 'src/app/models/Program';
import { Programservice } from 'src/app/services/programservice';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
@Injectable()
export class ProgramComponent implements OnInit {
  programs:any[];
  program:Program=new Program();
  totalElement:any;
  pageSize:any;
  totalPage:any;
  page: number = 0;
  
 
  constructor( private programService:Programservice, private router:Router){}
 
  ngOnInit(){ 
    this.getAllProgram(this.page); 
  }
  getAllProgram(page:number){
    this.programService.getAllProgram(page).subscribe((data:any)=>{
      this.programs=data.content;
      this.pageSize=data.pagination.size;
      this.totalPage=data.pagination.totalPages;
      this.totalElement=data.pagination.totalElements;
      this.page=data.pagination.page+1;
      
    });
}
  navigateToUpdateForm(programId:string){
    this.router.navigate(['program/updateprogram',programId])
  }
  deleteProgramById(programId:string){
    this.programService.deleteProgramById(programId).subscribe(data=>{
      console.log(data);
      console.log("delete student")
      this.getAllProgram(this.page);
    })
  }
  searchProgram(event:any){
    console.log("search button",event.target.value);
    this.programService.searchProgram(event.target.value).subscribe(data=>{
      console.log("ffffffffffffff",data)
      this.programs=data;
    })
  }
  searchProgramOnClick(event:any){
    console.log("search button click",event);
    this.programService.searchProgram(event).subscribe(data=>{
      console.log("ffffffffffffff",data)
      this.programs=data;
    })
  }
  onPaginationClick(page:number){
    this.getAllProgram(page);
  }
}
