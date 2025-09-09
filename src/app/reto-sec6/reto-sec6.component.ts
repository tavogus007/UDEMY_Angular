import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";
@Component({
  selector: 'app-reto-sec6',
  standalone: true,
  imports: [HijoComponent ],
  templateUrl: './reto-sec6.component.html',
  styleUrl: './reto-sec6.component.css'
})
export class RetoSec6Component {

    @ViewChild(HijoComponent) componenteHijo!: HijoComponent;

    cambiarMensajeHijo(){
      this.componenteHijo.cambiarMensaje("Mensaje actualizado desde el componente Padre")
    }

};
