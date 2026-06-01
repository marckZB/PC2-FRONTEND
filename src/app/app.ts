import { Component } from '@angular/core';
// 1. Importamos los módulos de enrutamiento en lugar de componentes específicos
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Aquí es donde agregamos las herramientas de navegación
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'PC2-FRONTEND';
}
