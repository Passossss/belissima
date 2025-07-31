import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Revendedora, EstadoBrasil } from '../../core/models/revendedora';

@Component({
  selector: 'app-revendedora-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './revendedora-form.component.html',
  styleUrls: ['./revendedora-form.component.css']
})
export class RevendedoraFormComponent implements OnChanges {
  @Input() revendedora: Revendedora | null = null;
  @Output() save = new EventEmitter<Revendedora>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;
  estados = Object.entries(EstadoBrasil).map(([key, value]) => ({ sigla: key, nome: value }));
  isLoading = false;
  saveSuccess = false;

  private fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      id: [''],
      nome: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', Validators.required],
      cidade: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      numero: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s\d{4,5}-\d{4}$/)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['revendedora'] && this.revendedora) {
      this.form.patchValue(this.revendedora);
    }
  }

  onSave(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.saveSuccess = false;

    setTimeout(() => {
      this.isLoading = false;
      this.saveSuccess = true;

      setTimeout(() => {
        this.save.emit(this.form.value);
      }, 2000);

    }, 1500);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  isInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
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
    this.form.get('numero')?.setValue(valor, { emitEvent: false });
  }

  filtrar(event: any, campo: string): void {
    let valor = event.target.value;    
    valor = valor.replace(/[^A-Za-zÀ-ÿ\s]/g, '');

    this.form.get(campo)?.setValue(valor, { emitEvent: false });
  }
}