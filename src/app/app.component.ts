import { Component } from '@angular/core';
import { ComponenteIfComponent } from './componente-if/componente-if.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Directiva @if en Angular';
}
