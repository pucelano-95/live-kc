import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'path',
    loadChildren: () =>
      import('./tareas/tareas.module').then((m) => m.TareasModule),
  },
  {
    path: 'path',
    loadChildren: () =>
      import('./contactos/contactos.module').then((m) => m.ContactosModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
