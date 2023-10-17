import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor() {}

  username: string = '';
  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user_info')!);
    this.username = user.username;
  }

  handleLogout() {
    localStorage.removeItem('user_info');
    localStorage.removeItem('user_role');
  }
}
