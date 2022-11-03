import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquileresDeAutosComponent } from './alquileres-de-autos.component';

describe('AlquileresDeAutosComponent', () => {
  let component: AlquileresDeAutosComponent;
  let fixture: ComponentFixture<AlquileresDeAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquileresDeAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlquileresDeAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
