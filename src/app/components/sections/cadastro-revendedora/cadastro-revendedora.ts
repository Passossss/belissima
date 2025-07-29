import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Informacoes } from "../../informacoes/informacoes";
import { EstadoBrasil } from '../../../core/models/revendedora';

@Component({
  selector: 'app-cadastro-revendedora',
  imports: [CommonModule, ReactiveFormsModule, Informacoes],
  templateUrl: './cadastro-revendedora.html',
  styleUrl: './cadastro-revendedora.css',
})
export class CadastroRevendedora {
  cadastroForm!: FormGroup;
  estados = Object.entries(EstadoBrasil).map(([key, value]) => ({ sigla: key, nome: value }));

  private fb = inject(FormBuilder);

  constructor() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', Validators.required],
      cidade: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      numero: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
      termos: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Formulário válido:', this.cadastroForm.value); 
      //validando envio e
      //tratamento dos dados da api do bruno, nao apagar por enquanto                                                       
    } else {
      console.log('Formulário inválido');
      this.cadastroForm.markAllAsTouched();
    }
  }

  isInvalid(isInvalid: string): boolean {
    const invalid = this.cadastroForm.get(isInvalid);
    return !!(invalid && invalid.invalid && invalid.touched);
  }

  formatarTelefone(event: any): void {
    let valor = event.target.value;

    valor = valor.replace(/\D/g, '');

    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }
    if (valor.length <= 2) {
      valor = valor.replace(/(\d{0,2})/, '($1');
    } else if (valor.length <= 7) {
      valor = valor.replace(/(\d{2})(\d{0,5})/, '($1) $2');
    } else {
      valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    this.cadastroForm.get('numero')?.setValue(valor, { emitEvent: false });
  }

  filtrar(event: any, campo: string): void {
    let valor = event.target.value;    
    valor = valor.replace(/[^A-Za-zÀ-ÿ\s]/g, '');

    this.cadastroForm.get(campo)?.setValue(valor, { emitEvent: false });
  }
}
