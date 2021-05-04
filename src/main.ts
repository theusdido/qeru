import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment,lsClear } from './environments/environment';

if (environment.global.production) {
  enableProdMode();
}

lsClear();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));