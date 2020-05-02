// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
// Array de rutas
const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'proyectos', component: ProjectComponent},
  {path: 'crear-proyecto', component: CreateComponent},
  {path: 'contactos', component: ContactComponent},
  {path: 'proyecto/:id', component: DetailComponent},
  {path: '**', component: ErrorComponent}
];
//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
