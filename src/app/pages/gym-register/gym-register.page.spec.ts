import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GymRegisterPage } from './gym-register.page';

describe('GymRegisterPage', () => {
  let component: GymRegisterPage;
  let fixture: ComponentFixture<GymRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GymRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
