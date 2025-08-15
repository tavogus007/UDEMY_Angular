import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  operador_A: number = 0;
  operador_B: number = 0;
  resultado: number = 0;
  sumar(){
    this.resultado = this.operador_A + this.operador_B;
  }
}
