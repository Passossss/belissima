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
      numero: ['', [Validators.required, Validators.pattern(/^[\d\s\(\)\-]+$/)]],
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
}
