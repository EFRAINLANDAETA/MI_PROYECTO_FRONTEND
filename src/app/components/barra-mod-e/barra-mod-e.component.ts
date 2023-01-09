import { Component,  Input,  OnInit,  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-barra-mod-e',
  templateUrl: './barra-mod-e.component.html',
  styleUrls: ['./barra-mod-e.component.css']
})
export class BarraModEComponent implements OnInit {
  @Input() progresse: number = 0;
  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    let scrollProgresse = document.getElementById("progresse") as HTMLElement;
     scrollProgresse.style.background = `conic-gradient(from 270deg, rgb(10, 214, 10) ${this.progresse}%, rgb(101, 227, 236, 0.3) ${this.progresse}%)`;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }
}