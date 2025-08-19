import { Component } from '@angular/core';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgregarTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Local reference in Angular';
}
