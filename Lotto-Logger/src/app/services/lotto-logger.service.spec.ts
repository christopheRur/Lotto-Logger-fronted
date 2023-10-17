import { TestBed } from '@angular/core/testing';

import { LottoLoggerService } from './lotto-logger.service';

describe('LottoLoggerService', () => {
  let service: LottoLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottoLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
