import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {NgxCountrySelectModule} from "../../projects/ngx-country-select/src/lib/ngx-country-select.module";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom([
      NgxCountrySelectModule.forRoot({
        defaultLanguage: "en",
        defaultFormFieldAppearance: "fill"
      }),
    ]),
  ]
};
