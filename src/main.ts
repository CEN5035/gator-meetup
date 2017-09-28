import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { GridModule } from './grid/grid.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GridModule);
  /*.catch(err => console.log(err));*/

// platformBrowserDynamic().bootstrapModule(AppModule);
