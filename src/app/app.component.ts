import { Component } from '@angular/core';
import { HijoComponent } from './reto-sec6/hijo/hijo.component';
import { RetoSec6Component } from "./reto-sec6/reto-sec6.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HijoComponent, RetoSec6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Reto sec 6, calculadora';
}
