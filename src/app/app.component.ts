import { Component } from '@angular/core';
import { RetoSec5Component } from "./reto-sec5/reto-sec5.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RetoSec5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tienda Online';
}
