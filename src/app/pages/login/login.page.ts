import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormsModule,
  FormControl,
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRouterOutlet, IonButton, IonIcon } from '@ionic/angular/standalone';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, 
    IonRouterOutlet,
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
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.UserService.login(this.loginForm.value)
        .then((response) => {
          console.log(response)

          this.router.navigate(['/home']);
        })
        .catch((error) => console.log(error));
    }
  }

  signInWithGoogle() {
    this.UserService.loginWithGoogle()
      .then((response) => {
        console.log(response)
        this.router.navigate(['/home']);

      })
      .catch((error) => console.log(error));
  }

  ngOnInit() {}
}
