import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <-- CORREGIDO: Apunta directo a app.ts sin .component

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));