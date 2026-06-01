import { Component } from '@angular/core';
import { TareasComponent } from './components/tareas/tareas'; // <-- Ruta corta sin .component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TareasComponent],
  templateUrl: './app.html', // <-- Ruta corregida sin .component
  styleUrl: './app.css'      // <-- Ruta corregida sin .component
})
export class AppComponent {
  title = 'PC2-FRONTEND';
}
