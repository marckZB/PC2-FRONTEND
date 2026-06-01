import { Routes } from '@angular/router';
// Importa tus componentes
import { TareasComponent } from './components/tareas/tareas';
import { CafeteriaComponent } from './components/cafeteria/cafeteria';
import { IncidenciasComponent } from './components/incidencias/incidencias';
import { MatriculasComponent } from './components/matriculas/matriculas';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'cafeteria', component: CafeteriaComponent },
  { path: 'incidencias', component: IncidenciasComponent },
  { path: 'matriculas', component: MatriculasComponent },
  { path: '**', redirectTo: 'tareas' }
];
