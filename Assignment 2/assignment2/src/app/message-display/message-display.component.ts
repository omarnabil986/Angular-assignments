import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReverseTextPipe } from '../reverse-text.pipe';

@Component({
  selector: 'app-message-display',
  imports: [FormsModule, ReverseTextPipe],
  templateUrl: './message-display.component.html',
  styleUrl: './message-display.component.css',
})
export class MessageDisplayComponent {
  message: string = '';
}
