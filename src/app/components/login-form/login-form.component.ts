import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private form: FormBuilder, private userService: AuthService, private nav: Router) {}

  currentUser = this.form.group({
    email: [''],
    password: [''],
  });

  users!: User[];
  async ngOnInit() {
    this.users = await lastValueFrom(this.userService.getUsers());
  };

  async handleSubmit() {
    try {
      const user = this.users.find(u => u.email === this.currentUser.value.email);
      if(!user) {
        alert("User not exist");
        return;
      }
      if(user?.password !== this.currentUser.value.password) {
        alert("Wrong password");
        return;
      }

      if(user?.role === '2') {
        this.nav.navigate(['/admin']);
      } else {
        alert("You're not authorized to access this page");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  
}
