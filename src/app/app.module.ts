import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { PersonaComponent } from './Persona/persona.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { CardsMenuComponent } from './cards-menu/cards-menu.component';
import { ListarCarreraComponent } from './Carreras/listar-carrera/listar-carrera.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursosGridComponents } from './Cursos/grids/cursos-grid.component';
import { AvtividadesGridComponents } from './Actividades/grids/actividades-grid.component';
import { SeccionesGridComponents } from './Secciones/grids/secciones-grid.component';
import { CursosComponents } from './Cursos/cursos.component';
import { CarrerasComponent } from './Carreras/carreras.component';
import { SeccionesComponents } from './Secciones/secciones.component';
import { ActividadComponent } from './Actividades/actividad.component';
import { PersonaGridComponent } from './Persona/grids/persona-grid.component';
import { SedesComponents } from './Sedes/sedes.component';
import { SedesGridComponents } from './Sedes/grids/sedes-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonaComponent,
    PersonaGridComponent,
    MenuComponent,
    PageNotFoundComponent,
    RecuperarPassComponent,
    CardsMenuComponent,
    ListarCarreraComponent,
    CursosGridComponents,
    AvtividadesGridComponents,
    SeccionesGridComponents,
    CursosComponents,
    CarrerasComponent,
    SeccionesComponents,
    ActividadComponent,
    SedesComponents,
    SedesGridComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
