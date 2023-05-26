import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooEj2AnimalComponent } from './poo-ej2-animal.component';

describe('PooEj2AnimalComponent', () => {
  let component: PooEj2AnimalComponent;
  let fixture: ComponentFixture<PooEj2AnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PooEj2AnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PooEj2AnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
