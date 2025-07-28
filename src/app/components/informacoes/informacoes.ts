import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  imports: [CommonModule, NgIf],
  templateUrl: './informacoes.html',
  styleUrl: './informacoes.css'
})
export class Informacoes {
  @Input() texto: string = '40%';   
  @Input() texto2: string = 'margem'; 
  @Input() mostrarIcone: boolean = false;

  @Input() icon: string = 'assets/icons/foto-da-margem.svg';
}
