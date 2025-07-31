import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../header/header";
import { FooterComponent } from "../footer/footer.component";
import { CadastroService } from '../../core/services/cadastro-service';
import { Revendedora } from '../../core/models/revendedora';
import { Informacoes } from '../informacoes/informacoes';

@Component({
  selector: 'app-revendedoras',
  imports: [CommonModule, FormsModule, Informacoes],
  templateUrl: './revendedoras.html',
  styleUrl: './revendedoras.css'
})
export class Revendedoras implements OnInit {
  private cadastroService = inject(CadastroService);
  revendedoras: Revendedora[] = [];
  mostrarConfirmacao = false;
  revendedoraParaDeletar: Revendedora | null = null;

  ngOnInit() {
    this.buscarRevendedoras();
  }

  buscarRevendedoras() {
    this.cadastroService.getAll().subscribe({
      next: (data) => {
        this.revendedoras = data;
      },
      error: (error) => {
        console.error('Erro ao buscar revendedoras:', error);
      }
    });
  }

  deletarRevendedora(revendedora: Revendedora){
    this.revendedoraParaDeletar = revendedora;
    this.mostrarConfirmacao = true;
  }

  confirmarDelecao() {
    if (this.revendedoraParaDeletar?.id) {
      this.cadastroService.delete(this.revendedoraParaDeletar.id).subscribe({
        next: () => {
          this.buscarRevendedoras();
          this.cancelarDelecao();
        },
        error: (error) => {
          console.error('Erro ao deletar revendedora:', error);
          this.cancelarDelecao();
        }
      });
    }
  }

  cancelarDelecao() {
    this.mostrarConfirmacao = false;
    this.revendedoraParaDeletar = null;
  }

  editarRevendedora(revendedora: Revendedora){

  }
}
