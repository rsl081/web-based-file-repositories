import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddCardComponentComponent } from './dashboard-add-card-component.component';

describe('DashboardAddCardComponentComponent', () => {
  let component: DashboardAddCardComponentComponent;
  let fixture: ComponentFixture<DashboardAddCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
