import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyParameterComponent } from './faculty-parameter.component';

describe('FacultyParameterComponent', () => {
  let component: FacultyParameterComponent;
  let fixture: ComponentFixture<FacultyParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
