// import { Programservice } from './programservice';

// describe('Programservice', () => {
//   it('should create an instance', () => {
//     expect(new Programservice()).toBeTruthy();
//   });
// });
import { TestBed } from '@angular/core/testing';
import { Programservice } from './programservice';

describe('Programservice', () => {
  let service: Programservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Programservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
