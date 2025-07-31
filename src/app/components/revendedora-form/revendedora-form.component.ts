import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Revendedora } from '../../core/models/revendedora';

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
  isLoading = false;
  saveSuccess = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', [Validators.required, Validators.maxLength(2)]],
      cidade: ['', Validators.required],
      numero: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['revendedora'] && this.revendedora) {
      this.form.patchValue(this.revendedora);
    }
  }

  onSave(): void {
    if (this.form.invalid) {
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
}