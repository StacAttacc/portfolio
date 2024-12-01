import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageComponent as BioAndEmailComponent } from './about-page.component';

describe('AboutPageComponent', () => {
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
