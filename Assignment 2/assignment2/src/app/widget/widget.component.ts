import {
  AfterContentChecked,
  AfterContentInit,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
})
export class WidgetComponent implements AfterContentInit, AfterContentChecked {
  ngAfterContentInit(): void {
    console.log('Content has been initialized.');
  }

  ngAfterContentChecked(): void {
    console.log('Projected content has been checked.');
  }
}
