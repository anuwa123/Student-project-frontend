import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ProgramComponent } from './program/program.component';
import { DashboardComponent } from './dashboard.component';
import { StudentformComponent } from './student/studentform/studentform.component';
import { StudentupdateComponent } from './student/studentupdate/studentupdate.component';
import { ProgramformComponent } from './program/programform/programform.component';
import { ProgramupdateComponent } from './program/programupdate/programupdate.component';
import { AssignprogramComponent } from './student/assignprogram/assignprogram.component';

const routes: Routes = [{path:'',component:DashboardComponent,children:[
  {path: '', redirectTo: '/student', pathMatch: 'full'},
  {path:'student',component:StudentComponent},
  {path:'program',component:ProgramComponent},
  {path:'student/studentform',component:StudentformComponent},
  {path:'student/updatestudent/:studentId',component:StudentupdateComponent},
  {path:'program/programform',component:ProgramformComponent},
  {path:'program/updateprogram/:programId',component:ProgramupdateComponent},
  {path:'student/assingstudent/:studentId',component:AssignprogramComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}