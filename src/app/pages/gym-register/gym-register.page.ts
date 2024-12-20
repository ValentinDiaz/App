import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { Gimnasio } from 'src/app/interfaces/gym.interface';
import { Firestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Validators, FormBuilder, FormGroup } from '@angular/forms'; 
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-gym-register',
  templateUrl: './gym-register.page.html',
  styleUrls: ['./gym-register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterLink,ReactiveFormsModule],
})
export class GymRegisterPage implements OnInit {
  gimnasioForm: FormGroup;
  constructor(
    private firestore: Firestore,
    private router: Router,
    private authService: authService
  ) {
    this.gimnasioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),  // Requiere el nombre
      direccion: new FormControl('', [Validators.required]),  // Requiere la dirección
      telefono: new FormControl(''),  // Teléfono es opcional
      email: new FormControl('', [Validators.email])  // Valida que sea un correo electrónico
    });
  }
  gimnasio: Gimnasio = {
    uid: '',
    nombre: '',
    direccion: '',
    telefono: '',
    usuarios: [],
    email: '',
  };

  ngOnInit() {}

  crearGimnasio():void{
    if (this.gimnasioForm.valid) {
      this.authService
        .registerGym(this.gimnasioForm.value)
        .then((Response) => {
          console.log(Response);
          this.router.navigate(['/login']);
        })
        .catch((error) => console.log(error));
    }
  }
}
