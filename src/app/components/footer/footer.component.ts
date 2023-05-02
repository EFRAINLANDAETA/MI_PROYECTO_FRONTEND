import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
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
