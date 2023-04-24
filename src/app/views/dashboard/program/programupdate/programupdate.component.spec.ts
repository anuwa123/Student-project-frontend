import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramupdateComponent } from './programupdate.component';

describe('ProgramupdateComponent', () => {
  let component: ProgramupdateComponent;
  let fixture: ComponentFixture<ProgramupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
