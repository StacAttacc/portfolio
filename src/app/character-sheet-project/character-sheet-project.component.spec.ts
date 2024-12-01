import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetProjectComponent } from './character-sheet-project.component';

describe('CharacterSheetProjectComponent', () => {
  let component: CharacterSheetProjectComponent;
  let fixture: ComponentFixture<CharacterSheetProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetProjectComponent]
    });
    fixture = TestBed.createComponent(CharacterSheetProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
