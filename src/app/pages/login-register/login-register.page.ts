import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Router, RouterLink } from '@angular/router';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
  ],
})
export class LoginRegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarPassword: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),


    })
  }


  

  ngOnInit() {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService
        .registerUser(this.registerForm.value)
        .then((Response) => {
          console.log(Response);
          this.router.navigate(['/login']);
        })
        .catch((error) => console.log(error));
    }
  }
}
