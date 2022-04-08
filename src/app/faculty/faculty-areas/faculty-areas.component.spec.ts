import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAreasComponent } from './faculty-areas.component';

describe('FacultyAreasComponent', () => {
  let component: FacultyAreasComponent;
  let fixture: ComponentFixture<FacultyAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
