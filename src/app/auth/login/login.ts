import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginObj: any = {
    userName: '',
    password: '',
  };

  router = inject(Router);

  onLogin() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == 'admin@123#') {
      alert('Login Successfully.');
      this.router.navigateByUrl('/dashboard');
    } else {
      alert('Invalid Login Credentials');
    }
  }
}
