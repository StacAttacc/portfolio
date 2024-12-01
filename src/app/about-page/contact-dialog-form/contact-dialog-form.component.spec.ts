import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogFormComponent } from './contact-dialog-form.component';

describe('ContactDialogFormComponent', () => {
  let component: ContactDialogFormComponent;
  let fixture: ComponentFixture<ContactDialogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDialogFormComponent]
    });
    fixture = TestBed.createComponent(ContactDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
