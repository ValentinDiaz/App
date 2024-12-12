import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from 'src/app/componentes/side-bar/side-bar.component'; 
import { AlertController, LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    IonicModule, 
    CommonModule,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  constructor(private authService: authService, private router: Router,private alertController: AlertController) {}

  ngOnInit() {}

  async logOut() {
    const alert = await this.alertController.create({
      header: 'LogOut',
      message: '¿Deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.authService.logOut().then(() => {
              this.router.navigate(['/login']);
            }).catch(error => console.log(error));
          }
        }
      ]
    });
  
    await alert.present();
  }

  

  




  
}
