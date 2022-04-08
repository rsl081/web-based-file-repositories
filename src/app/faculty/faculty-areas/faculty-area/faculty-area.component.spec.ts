import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAreaComponent } from './faculty-area.component';

describe('FacultyAreaComponent', () => {
  let component: FacultyAreaComponent;
  let fixture: ComponentFixture<FacultyAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
