import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmarLogOutComponent } from './confirmar-log-out.component';

describe('ConfirmarLogOutComponent', () => {
  let component: ConfirmarLogOutComponent;
  let fixture: ComponentFixture<ConfirmarLogOutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmarLogOutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmarLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
