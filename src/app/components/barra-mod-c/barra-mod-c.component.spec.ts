import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraModCComponent } from './barra-mod-c.component';

describe('BarraModCComponent', () => {
  let component: BarraModCComponent;
  let fixture: ComponentFixture<BarraModCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraModCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraModCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
