import { Component } from '@angular/core';
import { RetoSec5Component } from "./reto-sec5/reto-sec5.component";
import { PadreComponent } from './padre/padre.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Decorador @Input';
}
