import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooEj4CamposComponent } from './poo-ej4-campos.component';

describe('PooEj4CamposComponent', () => {
  let component: PooEj4CamposComponent;
  let fixture: ComponentFixture<PooEj4CamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PooEj4CamposComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PooEj4CamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
