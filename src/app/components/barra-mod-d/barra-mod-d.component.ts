import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-d',
  templateUrl: './barra-mod-d.component.html',
  styleUrls: ['./barra-mod-d.component.css']
})
export class BarraModDComponent implements OnInit {
  @Input() progressd: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressd = document.getElementById("progressd") as HTMLElement;
     scrollProgressd.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressd}%, rgb(101, 227, 236, 0.3) ${this.progressd}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}