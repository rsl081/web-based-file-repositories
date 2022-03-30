import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLevelCardComponent } from './admin-level-card.component';

describe('AdminLevelCardComponent', () => {
  let component: AdminLevelCardComponent;
  let fixture: ComponentFixture<AdminLevelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLevelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLevelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
