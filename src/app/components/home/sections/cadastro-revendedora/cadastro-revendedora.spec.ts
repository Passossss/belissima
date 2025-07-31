import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroRevendedora } from './cadastro-revendedora';

describe('CadastroRevendedora', () => {
  let component: CadastroRevendedora;
  let fixture: ComponentFixture<CadastroRevendedora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroRevendedora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroRevendedora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
