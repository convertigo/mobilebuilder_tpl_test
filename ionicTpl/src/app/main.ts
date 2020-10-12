import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    if ('serviceWorker' in navigator) {
        console.log("trying to register");
        navigator.serviceWorker.register('ngsw-worker.js');
      }
    }).catch(err => console.log(err));
