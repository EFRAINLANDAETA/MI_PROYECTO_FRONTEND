import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-f',
  templateUrl: './barra-mod-f.component.html',
  styleUrls: ['./barra-mod-f.component.css']
})
export class BarraModFComponent implements OnInit {
  @Input() progressf: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgressf = document.getElementById("progressf") as HTMLElement;
     scrollProgressf.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progressf}%, rgb(101, 227, 236, 0.3) ${this.progressf}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}