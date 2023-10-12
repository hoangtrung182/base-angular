import { Component } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { User } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  constructor(private form: FormBuilder, private userService: AuthService, private nav: Router) {}

  authForm = this.form.group({
    username: [''],
    email: [''],
    password: [''],
    role: ['1']
  })
  
  async handleSubmit() {
    console.log(this.authForm.value)
    if(!this.authForm.valid) return;
      try {
        await lastValueFrom(this.userService.register((this.authForm.value) as User));
        this.nav.navigate(['/auth']);
        alert("Register successfully");
      } catch (error) {
        console.log(error);
      }
  }
}
