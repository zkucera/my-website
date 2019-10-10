import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AltumTempusComponent } from './components/altum-tempus/altum-tempus.component';
import { SelfStartComponent } from './components/self-start/self-start.component';
import { ProjectTemplateComponent } from './components/project-template/project-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AltumTempusComponent,
    SelfStartComponent,
    ProjectTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
