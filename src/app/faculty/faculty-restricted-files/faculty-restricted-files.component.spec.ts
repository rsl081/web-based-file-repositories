import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyRestrictedFilesComponent } from './faculty-restricted-files.component';

describe('FacultyRestrictedFilesComponent', () => {
  let component: FacultyRestrictedFilesComponent;
  let fixture: ComponentFixture<FacultyRestrictedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyRestrictedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyRestrictedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
