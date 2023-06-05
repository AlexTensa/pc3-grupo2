import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) { }

  onLoginSubmit() {
    this.authService.login(this.email, this.password)
      .then(response => {
        console.log('Login successful');
      })
      .catch(error => {
        console.log('Login error:', error);
      });
  }
}
