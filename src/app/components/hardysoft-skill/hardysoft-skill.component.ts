import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Varx } from '../../Varx';
import { VARX } from '../../mook-varx';



@Component({
  selector: 'app-hardysoft-skill',
  templateUrl: './hardysoft-skill.component.html',
  styleUrls: ['./hardysoft-skill.component.css']
})
export class HardysoftSkillComponent implements OnInit {
  varx: Varx = VARX;
  miPorfolio: any;
  progressa: number = 0;
  progressa_02: number = 0;
  progressb: number = 0;
  progressb_02: number = 0;
  progressc: number = 0;
  progressc_02: number = 0;
  progressd: number = 0;
  progressd_02: number = 0;
  progresse: number = 0;
  progresse_02: number = 0;
  progressf: number = 0;
  progressf_02: number = 0;
  noOfFiles: number = 90;
  completed: boolean = false;
  a: number = VARX.porcent01;
  b: number = VARX.porcent02;
  c: number = VARX.porcent03;
  d: number = VARX.porcent04;
  e: number = VARX.porcent05;
  f: number = VARX.porcent06;

  constructor(private datosPorfolio:PorfolioService) {
    
   }
    
  ngOnInit(): void {
    this.updateProgress();
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio=data;
      })
  }
  
  
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async updateProgress() {
    this.completed = false;
    let m =  this.a / this.noOfFiles;
    let n =  this.b / this.noOfFiles;
    let o =  this.c / this.noOfFiles;
    let p =  this.d / this.noOfFiles;
    let q =  this.e / this.noOfFiles;
    let r =  this.f / this.noOfFiles;
    for (let i = 0; i <= this.noOfFiles; i++) {
      await this.delay(50);
      this.progressa = Math.round(i * m / 2);
      this.progressa_02 = Math.round(this.progressa * 2);
      this.progressb = Math.round(i * n / 2);
      this.progressb_02 = Math.round(this.progressb * 2);
      this.progressc = Math.round(i * o / 2);
      this.progressc_02 = Math.round(this.progressc * 2);
      this.progressd = Math.round(i * p / 2);
      this.progressd_02 = Math.round(this.progressd * 2);
      this.progresse = Math.round(i * q / 2);
      this.progresse_02 = Math.round(this.progresse * 2);
      this.progressf = Math.round(i * r / 2);
      this.progressf_02 = Math.round(this.progressf * 2);
    }
    this.completed = false;
  }
}


