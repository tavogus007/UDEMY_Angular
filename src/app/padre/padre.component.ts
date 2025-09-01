import { Component } from '@angular/core';
import { HijoComponent } from './hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensaje: string = "";

  //Se emitio una cadena, es lo que se recibe del componente hijo
  recibirNotificacion(mensaje: string){
    this.mensaje = mensaje;
  }

}
