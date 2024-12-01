import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioAndEmailComponent } from './bio-and-email.component';

describe('BioAndEmailComponent', () => {
  let component: BioAndEmailComponent;
  let fixture: ComponentFixture<BioAndEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioAndEmailComponent]
    });
    fixture = TestBed.createComponent(BioAndEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
