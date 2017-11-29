import { TestBed, inject } from '@angular/core/testing';

import { Modal2Service } from './modal2.service';

describe('Modal2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Modal2Service]
    });
  });

  it('should be created', inject([Modal2Service], (service: Modal2Service) => {
    expect(service).toBeTruthy();
  }));
});
