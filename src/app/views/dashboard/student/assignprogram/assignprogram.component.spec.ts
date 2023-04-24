import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignprogramComponent } from './assignprogram.component';

describe('AssignprogramComponent', () => {
  let component: AssignprogramComponent;
  let fixture: ComponentFixture<AssignprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignprogramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
