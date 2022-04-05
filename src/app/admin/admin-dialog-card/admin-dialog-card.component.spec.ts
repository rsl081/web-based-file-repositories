import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogCardComponent } from './admin-dialog-card.component';

describe('AdminDialogCardComponent', () => {
  let component: AdminDialogCardComponent;
  let fixture: ComponentFixture<AdminDialogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDialogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDialogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
