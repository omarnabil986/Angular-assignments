import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  inputValue: string = '';
  tasks: string[] = [];
  showTasks: boolean = true;

  addTask() {
    this.tasks.push(this.inputValue);
    this.inputValue = '';
  }
}
