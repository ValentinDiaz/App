import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/services/auth.service';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class SidebarComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(private authService: authService) {}

  ngOnInit() {
    // Verificar si el usuario es admin
    this.authService.isAdmin().then((isAdmin: boolean) => {
      this.isAdmin = isAdmin; // Si es admin, mostramos la opción de crear usuario
    });
  }
}