import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Idiomas } from '../../Varx';
import { IDIOMAS } from '../../mook-varx';


@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  listaidiomas: Idiomas [] = IDIOMAS;
  idiomasList:any;
  progressg: number = 0;
  progressg_02: number = 0;
  progressh: number = 0;
  progressh_02: number = 0;
  progressi: number = 0;
  progressi_02: number = 0;
  noOfFiles: number = 90;
  completed: boolean = false;
  
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {this.datosPorfolio.obtenerDatos().subscribe(data =>{
    this.idiomasList=data.idiomas;
    })
  }
  
  
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async updateProgress() {
    this.completed = false;
    
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(50);
      
    }
    this.completed = false;
  }


}
