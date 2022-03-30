import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardAddCardComponent } from './admin-dashboard-add-card.component';

describe('AdminDashboardAddCardComponent', () => {
  let component: AdminDashboardAddCardComponent;
  let fixture: ComponentFixture<AdminDashboardAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
