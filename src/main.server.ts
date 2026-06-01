import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app'; // <-- CAMBIA 'App' POR 'AppComponent'import { config } from './app/app.config.server';
import { config } from './app/app.config.server';


const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(AppComponent, config, context);

export default bootstrap;
