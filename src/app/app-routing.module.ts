import { NgModule, Self } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomepageComponent} from './components/homepage/homepage.component';
import {AltumTempusComponent} from './components/altum-tempus/altum-tempus.component';
import {SelfStartComponent} from './components/self-start/self-start.component';
import {ProjectTemplateComponent} from './components/project-template/project-template.component'


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'projects', component: ProjectTemplateComponent, children:[
    {path: 'altumtempus', component: AltumTempusComponent},
    {path: 'selfstart', component: SelfStartComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
