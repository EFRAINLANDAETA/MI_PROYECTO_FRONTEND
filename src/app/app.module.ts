import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/header/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HardysoftSkillComponent } from './components/hardysoft-skill/hardysoft-skill.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BarraModAComponent } from './components/barra-mod-a/barra-mod-a.component';
import { BarraModBComponent } from './components/barra-mod-b/barra-mod-b.component';
import { BarraModCComponent } from './components/barra-mod-c/barra-mod-c.component';
import { BarraModDComponent } from './components/barra-mod-d/barra-mod-d.component';
import { BarraModEComponent } from './components/barra-mod-e/barra-mod-e.component';
import { BarraModFComponent } from './components/barra-mod-f/barra-mod-f.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,

    IdiomasComponent,
    ProyectosComponent,
    EstudiosComponent,
    HardysoftSkillComponent,

    FooterComponent,
    BarraModAComponent,
    BarraModBComponent,
    BarraModCComponent,
    BarraModDComponent,
    BarraModEComponent,
    BarraModFComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
