import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooEjercicioPruebaCocheComponent } from './poo-ejercicio-prueba-coche.component';

describe('PooEjercicioPruebaCocheComponent', () => {
  let component: PooEjercicioPruebaCocheComponent;
  let fixture: ComponentFixture<PooEjercicioPruebaCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PooEjercicioPruebaCocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PooEjercicioPruebaCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
