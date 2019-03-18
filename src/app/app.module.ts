import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './component/menu/menu.component';
import {AboutmeComponent} from './component/aboutme/aboutme.component';
import {HeaderComponent} from './component/header/header.component';
import {EducationComponent} from './component/education/education.component';
import {ContactComponent} from './component/contact/contact.component';
import {ProjectComponent} from './component/project/project.component';
import {PortfolioComponent} from './component/portfolio/portfolio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutmeComponent,
    HeaderComponent,
    EducationComponent,
    ContactComponent,
    ProjectComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}