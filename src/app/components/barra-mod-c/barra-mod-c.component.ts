import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-c',
  templateUrl: './barra-mod-c.component.html',
  styleUrls: ['./barra-mod-c.component.css']
})
export class BarraModCComponent implements OnInit {
  @Input() progressc: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressc = document.getElementById("progressc") as HTMLElement;
     scrollProgressc.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressc}%, rgb(101, 227, 236, 0.3) ${this.progressc}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}