import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollComponentComponent } from './payroll-component.component';

describe('PayrollComponentComponent', () => {
  let component: PayrollComponentComponent;
  let fixture: ComponentFixture<PayrollComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollComponentComponent]
    });
    fixture = TestBed.createComponent(PayrollComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
