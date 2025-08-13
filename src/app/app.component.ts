import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PadreComponent, HijoComponent, MostrarMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio Digital';
}
