import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from "../header/header";
import { FooterComponent } from "../footer/footer.component";
import { CadastroService } from '../../core/services/cadastro-service';
import { Revendedora } from '../../core/models/revendedora';

@Component({
  selector: 'app-revendedoras',
  imports: [CommonModule, FormsModule],
  templateUrl: './revendedoras.html',
  styleUrl: './revendedoras.css'
})
export class Revendedoras implements OnInit {
  private cadastroService = inject(CadastroService);
  revendedoras: Revendedora[] = [];

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

  deletarRevendedora(id?: string){
     if (confirm('Tem certeza que deseja deletar esta revendedora?')) {
      this.cadastroService.delete(id).subscribe({
        next: () => {
          this.buscarRevendedoras();
        },
        error: (error) => {
          console.error('Erro ao deletar revendedora:', error);
        }
      });
    }
  }

  editarRevendedora(revendedora: Revendedora){

  }
}
