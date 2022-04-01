import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummaryGenComponent } from './admin-summary-gen.component';

describe('AdminSummaryGenComponent', () => {
  let component: AdminSummaryGenComponent;
  let fixture: ComponentFixture<AdminSummaryGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSummaryGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSummaryGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
