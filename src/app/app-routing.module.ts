import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', data: { title: "Christian Heyd | Front End Developer & UX Designer" }, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, data: { title: "Christian Heyd | Front End Developer & UX Designer", state: 'about', animation: 'slideInAnimation' } },
  { path: 'work', component: WorkComponent, data: { title: "Christian Heyd | Work", state: 'work', animation: 'slideInAnimation' } },
  { path: 'contact', component: ContactComponent, data: { title: "Christian Heyd | Contact", state: 'contact', animation: 'slideInAnimation' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
