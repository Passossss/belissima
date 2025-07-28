import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-etapas',
  imports: [CommonModule],
  templateUrl: './etapas.html',
  styleUrls: ['./etapas.css']
})
export class Etapas {
  etapas = [
    {
      numero: 1,
      titulo: 'Preencha o formulário e receba todas as informações',
      descricao: 'Nossa equipe entrará em contato em até 24 horas',
      icon: '📋'
    },
    {
      numero: 2,
      titulo: 'Faça seu primeiro pedido',
      descricao: 'Escolha os produtos que mais combinam com você',
      icon: '🛒'
    },
    {
      numero: 3,
      titulo: 'Receba seu kit em casa em até 5 dias',
      descricao: 'Entrega rápida e segura em todo o território nacional',
      icon: '🚚'
    },
    {
      numero: 4,
      titulo: 'Comece a vender e lucrar',
      descricao: 'Margem de até 40% em todos os produtos da marca',
      icon: '💰'
    }
  ];
}
