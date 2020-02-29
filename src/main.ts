//load the app module into browser
//bootstrap angular app
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);