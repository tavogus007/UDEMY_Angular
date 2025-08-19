import { Component } from '@angular/core';
import { ComponenteForComponent } from './componente-for/componente-for.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Directiva @for en Angular';
}
