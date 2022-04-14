import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccreParametersComponent } from './accre-parameters.component';

describe('AccreParametersComponent', () => {
  let component: AccreParametersComponent;
  let fixture: ComponentFixture<AccreParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccreParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccreParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
