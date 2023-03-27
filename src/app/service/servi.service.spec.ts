import { TestBed } from '@angular/core/testing';

import { ServiService } from './servi.service';

describe('ServiService', () => {
  let service: ServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
