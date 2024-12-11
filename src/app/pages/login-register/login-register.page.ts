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
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
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
      email: new FormControl(),
      password: new FormControl(),
      confirmarPassword: new FormControl(),
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService
        .register(this.registerForm.value)
        .then((Response) => {
          console.log(Response);
          this.router.navigate(['/login']);
        })
        .catch((error) => console.log(error));
    }
  }
}
