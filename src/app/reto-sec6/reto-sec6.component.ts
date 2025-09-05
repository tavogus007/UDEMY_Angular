import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-reto-sec6',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './reto-sec6.component.html',
  styleUrl: './reto-sec6.component.css'
})
export class RetoSec6Component {
    res: number = 0;

    sumaRecibida(suma: number){
      console.log("mensaje de prueba",suma);
      
      this.res = suma;
    }
};

