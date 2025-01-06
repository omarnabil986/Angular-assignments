import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: string[] = [];
  lastAction = '';

  addTask(task: string) {
    this.tasks.push(task);
    this.lastAction = `Added: ${task}`;
  }

  removeTask(index: number) {
    const removedTask = this.tasks.splice(index, 1);
    this.lastAction = `Removed: ${removedTask[0]}`;
  }

  ngDoCheck(): void {
    console.log('The list was updated:', this.tasks);
  }
}
