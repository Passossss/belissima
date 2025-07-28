import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToAction } from './call-to-action';

describe('CallToAction', () => {
  let component: CallToAction;
  let fixture: ComponentFixture<CallToAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToAction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct default texts', () => {
    expect(component.titulo).toBe('Pronta para começar?');
    expect(component.subtitulo).toContain('milhares de revendedoras');
    expect(component.textoBotao).toBe('Cadastre-se agora');
  });
});
