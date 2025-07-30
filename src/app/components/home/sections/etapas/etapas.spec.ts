import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etapas } from './etapas';

describe('Etapas', () => {
  let component: Etapas;
  let fixture: ComponentFixture<Etapas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etapas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etapas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 etapas', () => {
    expect(component.etapas.length).toBe(4);
  });

  it('should have correct etapa titles', () => {
    expect(component.etapas[0].titulo).toContain('formulário');
    expect(component.etapas[1].titulo).toContain('primeiro pedido');
    expect(component.etapas[2].titulo).toContain('kit em casa');
    expect(component.etapas[3].titulo).toContain('vender e lucrar');
  });
});
