import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaNotas } from './sistema-notas';

describe('SistemaNotas', () => {
  let component: SistemaNotas;
  let fixture: ComponentFixture<SistemaNotas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaNotas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaNotas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
