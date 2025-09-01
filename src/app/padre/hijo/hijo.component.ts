import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  //Esto significa ! => "No nulo (non-null)", significa que este operador o variable en este vaso, se va a inicializar posteriormente
  @Input() mensaje!: string; //recibira informacion del compnente padre)
}