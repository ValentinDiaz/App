import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {
   
  LoadingController} from '@ionic/angular/standalone';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    IonicModule
  ],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | undefined;
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: authService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Iniciando sesión...',
      });
      await loading.present();

      this.authService.login(this.loginForm.value)
        .then((response) => {
          console.log(response);
          this.router.navigate(['/home']);
          loading.dismiss();
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.'; // Mostrar mensaje de error
          loading.dismiss();
        });
    } else {
      this.errorMessage = 'Por favor, ingresa un correo y contraseña válidos.';
    }
  }

  signInWithGoogle() {
    this.authService.loginWithGoogle()
      .then((response) => {
        console.log(response)
        this.router.navigate(['/home']);

      })
      .catch((error) => console.log(error));
  }

  ngOnInit() {}
}
