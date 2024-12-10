import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, 
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
export class LoginPage implements OnInit {
  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.login = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.login.valid) {
      const { username, password } = this.login.value;
      console.log('Usuario:', username, 'Contraseña:', password);
    }
  }

  ngOnInit() {}
}
