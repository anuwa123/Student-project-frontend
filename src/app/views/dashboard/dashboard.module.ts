import { NgModule } from '@angular/core';
import { ProgramComponent } from './program/program.component';
import { StudentComponent } from './student/student.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from 'src/app/component/navbar/navbar.component';
import { FooterComponent } from 'src/app/component/footer/footer.component';
import { StudentformComponent } from './student/studentform/studentform.component';
import { ProgramformComponent } from './program/programform/programform.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { StudentupdateComponent } from './student/studentupdate/studentupdate.component';
import { ProgramupdateComponent } from './program/programupdate/programupdate.component';
import { AssignprogramComponent } from './student/assignprogram/assignprogram.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatPaginatorModule} from '@angular/material/paginator';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    ProgramComponent,
    NavbarComponent,
    FooterComponent,
    StudentformComponent,
    ProgramformComponent,
    StudentupdateComponent,
    ProgramupdateComponent,
    AssignprogramComponent,  
  ],
  imports: [
    DashboardRoutingModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    NgSelectModule,
    MatPaginatorModule,
    NgbPaginationModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    NgxPaginationModule
    
    
  ],
  providers: [],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
