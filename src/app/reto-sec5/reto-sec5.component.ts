import { Component } from '@angular/core';

@Component({
  selector: 'app-reto-sec5',
  standalone: true,
  imports: [],
  templateUrl: './reto-sec5.component.html',
  styleUrl: './reto-sec5.component.css'
})
export class RetoSec5Component {
  titulo_r: string = "Listado de Productos";

  productos: string[] = [
    "Pantalon",
    "Camisa",
    "Zapatos",  
  ]

  precios: number[] = [
    19.99,
    29.99,
    49.99
  ]

  registraProducto(nuevoProducto: string): void{
    this.productos.push(nuevoProducto);
  }

  registraPrecio(nuevoPrecio: number): void{
    this.precios.push(nuevoPrecio);
  }
}
