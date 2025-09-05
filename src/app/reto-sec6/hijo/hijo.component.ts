import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() resultado = new EventEmitter<number>();

  operadorA :number = 0;
  operadorB: number = 0;
  // resultado: number = 0;

  sumar(){
    this.resultado.emit(this.operadorA + this.operadorB);
  }
}
