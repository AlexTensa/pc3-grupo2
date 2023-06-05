import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService],

})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(@Inject(AuthService) private authService: AuthService){}

  register() {
    this.authService.register(this.email, this.password)
      .then(() => {
        // Registro exitoso, redirigir a la página de inicio o realizar alguna acción adicional
      })
      .catch((error) => {
        // Manejar errores de registro
        console.log(error);
      });
  }
}
