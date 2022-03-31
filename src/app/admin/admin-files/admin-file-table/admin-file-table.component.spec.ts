import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFileTableComponent } from './admin-file-table.component';

describe('AdminFileTableComponent', () => {
  let component: AdminFileTableComponent;
  let fixture: ComponentFixture<AdminFileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFileTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
