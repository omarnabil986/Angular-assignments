import { Component } from '@angular/core';
import { TemperatureDisplayComponent } from '../temperature-display/temperature-display.component';

@Component({
  selector: 'app-temperature-controller',
  imports: [TemperatureDisplayComponent],
  templateUrl: './temperature-controller.component.html',
  styleUrl: './temperature-controller.component.css',
})
export class TemperatureControllerComponent {
  temperature = 25;

  increaseTemperature() {
    this.temperature++;
  }

  decreaseTemperature() {
    this.temperature--;
  }
}
