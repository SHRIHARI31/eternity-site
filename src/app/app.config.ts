import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import Aura from '@primeuix/themes/aura'

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })), provideClientHydration(withEventReplay()),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })

  ]
};
