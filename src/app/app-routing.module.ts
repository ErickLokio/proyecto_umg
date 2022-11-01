import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { PersonaComponent } from './Persona/persona.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardsMenuComponent } from './cards-menu/cards-menu.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { PersonaGridComponent } from './Persona/grids/persona-grid.component';
import { CarrerasGridsComponents } from './Carreras/grids/carreras-grids.componets';
import { CursosGridComponents } from './Cursos/grids/cursos-grid.component';
import { CursosComponents } from './Cursos/cursos.component';
import { SeccionesGridComponents } from './Secciones/grids/secciones-grid.component';
import { SeccionesComponents } from './Secciones/secciones.component';
import { AvtividadesGridComponents } from './Actividades/grids/actividades-grid.component';
import { ActividadComponent } from './Actividades/actividad.component';
import { ListarCarreraComponent } from './Carreras/listar-carrera/listar-carrera.component';
import { CarrerasComponent } from './Carreras/carreras.component';
import { SedesGridComponents } from './Sedes/grids/sedes-grid.component';
import { SedesComponents } from './Sedes/sedes.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'persona/:id', component: PersonaComponent },
  { path: 'persona-grid', component: PersonaGridComponent },
  { path: 'recuperar',component: RecuperarPassComponent },
  { path: 'cardMenu', component: CardsMenuComponent },
  { path: 'carrerasGrid', component: CarrerasGridsComponents },
  { path: 'carrerasIngreso', component: CarrerasComponent },
  { path: 'cursosGrid', component: CursosGridComponents },
  { path: 'cursos', component: CursosComponents },
  { path: 'secciones', component: SeccionesComponents },
  { path: 'seccionesGrid', component: SeccionesGridComponents },
  { path: 'actividadesGrid', component: AvtividadesGridComponents },
  { path: 'actividad', component: ActividadComponent },
  {path: 'listarCarrera', component: ListarCarreraComponent},
  {path: 'sedesGrid', component: SedesGridComponents},
  {path: 'sedes', component: SedesComponents},
  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
