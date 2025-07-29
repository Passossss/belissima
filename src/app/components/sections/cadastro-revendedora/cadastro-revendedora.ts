import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Informacoes } from "../../informacoes/informacoes";

@Component({
  selector: 'app-cadastro-revendedora',
  imports: [ReactiveFormsModule, Informacoes],
  templateUrl: './cadastro-revendedora.html',
  styleUrl: './cadastro-revendedora.css',
})
export class CadastroRevendedora {
  cadastroForm!: FormGroup;

  private fb = inject(FormBuilder);

  constructor() {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }
}
