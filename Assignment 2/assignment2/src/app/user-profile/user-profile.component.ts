import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  user: { name: string; age: number } | null = null;

  ngOnInit(): void {
    this.user = { name: 'Ali', age: 25 };
  }
}
