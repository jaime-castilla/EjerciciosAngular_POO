import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooEj1SaludoComponent } from './poo-ej1-saludo.component';

describe('PooEj1SaludoComponent', () => {
  let component: PooEj1SaludoComponent;
  let fixture: ComponentFixture<PooEj1SaludoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PooEj1SaludoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PooEj1SaludoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
