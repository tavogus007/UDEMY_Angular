import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  mensaje: string = "Mensaje desde el componente hijo";

  cambiarMensaje(nuevoMensaje: string){
    this.mensaje = nuevoMensaje
  }
}
