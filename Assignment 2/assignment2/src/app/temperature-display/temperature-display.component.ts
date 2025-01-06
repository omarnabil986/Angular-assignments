import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temperature-display',
  imports: [],
  templateUrl: './temperature-display.component.html',
  styleUrl: './temperature-display.component.css',
})
export class TemperatureDisplayComponent {
  @Input() temperature!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperature']) {
      console.log(`Temperature changed to: ${this.temperature}`);
    }
  }
}
