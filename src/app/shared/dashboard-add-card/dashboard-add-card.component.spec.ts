import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardAddCardComponent } from './dashboard-add-card.component';



describe('DashboardAddCardComponent', () => {
  let component: DashboardAddCardComponent;
  let fixture: ComponentFixture<DashboardAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
