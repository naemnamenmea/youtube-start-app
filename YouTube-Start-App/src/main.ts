import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare var require: any

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  
  var $ = require('jquery');
  require('fancybox')($);
  
  $(document).ready(function() {
      $.fancybox.open($('.fancybox-me'));
  });

  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });