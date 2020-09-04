import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from '../app/home-content/home-content.component'
import { AboutPageComponent } from '../app/about-page/about-page.component'


const routes: Routes = [
  { path: 'index', component: HomeContentComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
