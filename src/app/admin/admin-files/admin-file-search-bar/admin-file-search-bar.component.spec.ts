import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFileSearchBarComponent } from './admin-file-search-bar.component';

describe('AdminFileSearchBarComponent', () => {
  let component: AdminFileSearchBarComponent;
  let fixture: ComponentFixture<AdminFileSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFileSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFileSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
