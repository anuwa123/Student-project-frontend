// import { Studentservice, } from './studentservice';

// describe('Studentservice', () => {
//   it('should create an instance', () => {
//     expect(new Studentservice()).toBeTruthy();
//   });
// });
// import { TestBed } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';
import { Studentservice } from './studentservice';

describe('EmployeeService', () => {
  let service: Studentservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});