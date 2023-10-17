import { Component } from '@angular/core';
import { User } from 'src/app/interface';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  constructor() {}

  user!: User;
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user_info')!);
    this.user = user;
  }
}
