import { TestBed, inject } from '@angular/core/testing';

import { WriteboardService } from './writeboard.service';

describe('WriteboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WriteboardService]
    });
  });

  it('should be created', inject([WriteboardService], (service: WriteboardService) => {
    expect(service).toBeTruthy();
  }));
});
