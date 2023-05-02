import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPorfolio:any;

  persona: persona = new persona("", "", "", "", "", "", "", "", "", "", "");

  constructor(public personaService: PersonaService, private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.miPorfolio=data;}
    )
    }
    
}
