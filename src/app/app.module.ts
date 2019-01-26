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
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}