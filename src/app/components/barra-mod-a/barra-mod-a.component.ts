import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-a',
  templateUrl: './barra-mod-a.component.html',
  styleUrls: ['./barra-mod-a.component.css']
})
export class BarraModAComponent implements OnInit {
  @Input() progressa: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressa = document.getElementById("progressa") as HTMLElement;
     scrollProgressa.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressa}%, rgb(101, 227, 236, 0.3) ${this.progressa}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}