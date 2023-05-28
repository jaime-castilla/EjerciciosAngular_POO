import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PooEj3AreasComponent } from './poo-ej3-areas.component';

describe('PooEj3AreasComponent', () => {
  let component: PooEj3AreasComponent;
  let fixture: ComponentFixture<PooEj3AreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PooEj3AreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PooEj3AreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
