import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TemperatureControllerComponent } from './temperature-controller/temperature-controller.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CurrencyDisplayComponent } from './currency-display/currency-display.component';
import { MessageDisplayComponent } from './message-display/message-display.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    UserProfileComponent,
    TemperatureControllerComponent,
    TodoListComponent,
    DashboardComponent,
    BlogListComponent,
    CurrencyDisplayComponent,
    MessageDisplayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment2';
}
