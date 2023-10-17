import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  
  users!: User[];
  currentUser = this.form.group({
    email: ['', [Validators.required, Validators.email, Validators.minLength(6)]],
    password: ['', [Validators.required]],
  });
  role!: number;

  async ngOnInit() {
    this.users = await lastValueFrom(this.userService.getUsers());
    const role = JSON.parse(localStorage.getItem('user_role')!);
    if(!role) {
      return;
    } else {
      this.role = role;
    }

    const accessToken = JSON.parse(localStorage.getItem('user_role')!);
    if(accessToken === '1') {
      this.nav.navigate(['/home'])
    } else {
      this.nav.navigate(['/admin'])
    }

  };

  // if(!role)



  async handleSubmit() {
    if(!this.currentUser.valid) {
      alert("Errors happened! Please Check it out")!
      return;
    }

    try {
      const user = this.users.find(u => u.email === this.currentUser.value.email);
      if(!user) {
        alert("Email or Password is incorrect!");
        return;
      }

      if(user?.password !== this.currentUser.value.password) {
        alert("Email or Password is incorrect!");
        return;
      }

      const { password, email, role,  ...others } = user;

      localStorage.setItem('user_role', JSON.stringify(role)!);
      localStorage.setItem('user_info', JSON.stringify(others!));

      if(user?.role === '2') {
        this.nav.navigate(['/admin']);
      } else {
        this.nav.navigate(['/home']);
      }

    } catch (error) {
      console.log(error);
    }
  }
  
  
}
