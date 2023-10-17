import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoLoggerComponent } from './lotto-logger.component';

describe('LottoLoggerComponent', () => {
  let component: LottoLoggerComponent;
  let fixture: ComponentFixture<LottoLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottoLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
