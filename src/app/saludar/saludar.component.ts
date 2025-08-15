import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saludar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saludar.component.html',
  styleUrl: './saludar.component.css'
})
export class SaludarComponent {
  saludo = "Esto es un saludo inicial comprobado";
}
