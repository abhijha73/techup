import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinHomeComponent } from './pin-home.component';

describe('PinHomeComponent', () => {
  let component: PinHomeComponent;
  let fixture: ComponentFixture<PinHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PinHomeComponent]
    });
    fixture = TestBed.createComponent(PinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
