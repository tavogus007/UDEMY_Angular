import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje(){
    //Emitir el evento con un mensaje
    this.notificarPadre.emit("Mensaje desde el componente HIJO al PADRE");
  }
}