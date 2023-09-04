import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RouterModule ,Router } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.page.html',
  styleUrls: ['./cambio-pass.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CambioPassPage implements OnInit {

  constructor(private toastController: ToastController, private router:Router) { }
  
  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
      message: '!Correo enviado!',
      duration: 2000,
      position: position,
    });
    await toast.present();
  }
  navigateToContrasena(){
    this.router.navigate(['/contrasena']);
  }
  navigateToLogin(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
