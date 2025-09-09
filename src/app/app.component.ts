import { Component } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';
import { RetoSec6Component } from './reto-sec6/reto-sec6.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RetoSec6Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'decorador @ViewChild en Angular';
}
