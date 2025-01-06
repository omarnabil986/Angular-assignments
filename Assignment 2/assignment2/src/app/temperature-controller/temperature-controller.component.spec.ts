import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureControllerComponent } from './temperature-controller.component';

describe('TemperatureControllerComponent', () => {
  let component: TemperatureControllerComponent;
  let fixture: ComponentFixture<TemperatureControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
