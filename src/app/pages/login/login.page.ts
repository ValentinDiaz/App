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
import { UserService } from 'src/app/services/user.service';

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

  constructor(private fb: FormBuilder,private UserService: UserService) {
    this.login = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.login.valid) {
      const { email, password } = this.login.value;
      
    }
  }

  ngOnInit() {}
}
