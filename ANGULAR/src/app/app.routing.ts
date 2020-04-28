// Importar modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar Componentes
import { HomeComponent } from './home/home.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { CursoComponent } from './curso/curso.component';

// Array de rutas
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillaComponent},
  {path: 'videojuegos', component: VideojuegoComponent},
  {path: 'cursos/:nombre', component: CursoComponent},
  {path: 'cursos', component: CursoComponent},
  {path: '**', component: HomeComponent}
];
//Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
