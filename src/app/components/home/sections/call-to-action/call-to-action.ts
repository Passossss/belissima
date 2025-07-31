import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.html',
  styleUrls: ['./call-to-action.css']
})
export class CallToAction {
  titulo: string = 'Pronta para começar?';
  subtitulo: string = 'Junte-se a milhares de revendedoras que estão transformando suas vidas através do empreendedorismo com beleza';
  textoBotao: string = 'Cadastre-se agora';
}
