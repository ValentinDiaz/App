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
import { RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    RouterLink
  ],
})
export class LoginRegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = new FormGroup(
      {
      
        email: new FormControl(),
        password: new FormControl(),
        confirmPassword: new FormControl(),
      },
    );
  }

  ngOnInit() {}

 

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value)
    }
  }
}
