import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-display',
  imports: [CommonModule, FormsModule],
  templateUrl: './currency-display.component.html',
  styleUrl: './currency-display.component.css',
})
export class CurrencyDisplayComponent {
  prices: number[] = [1500.5, 999.99, 45.789];
  format: string = '1.2-2';

  formats: { label: string; value: string }[] = [
    { label: 'Two Decimal Places (1,500.50)', value: '1.2-2' },
    { label: 'No Decimal Places (1500)', value: '1.0-0' },
    { label: 'Three Decimal Places (1500.500)', value: '1.3-3' },
  ];
}
