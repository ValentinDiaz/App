import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { authService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SidebarComponent } from 'src/app/componentes/side-bar/side-bar.component'; 

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
  constructor(private authService: authService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.authService.logOut().then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.log(error));
  }
}
