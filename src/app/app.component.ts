import { Component } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'decorador @ViewChild en Angular';
}
