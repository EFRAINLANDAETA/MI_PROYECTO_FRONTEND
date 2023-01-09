import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-b',
  templateUrl: './barra-mod-b.component.html',
  styleUrls: ['./barra-mod-b.component.css']
})
export class BarraModBComponent implements OnInit {
  @Input() progressb: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressb = document.getElementById("progressb") as HTMLElement;
     scrollProgressb.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressb}%, rgb(101, 227, 236, 0.3) ${this.progressb}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}