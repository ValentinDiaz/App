import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { getAuth, updateProfile } from '@firebase/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completar-usuario',
  templateUrl: './completar-usuario.component.html',
  styleUrls: ['./completar-usuario.component.scss'],
  standalone: true,
})
export class CompletarUsuarioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
