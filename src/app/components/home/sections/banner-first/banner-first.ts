import { Component, input, Input } from '@angular/core';

import { Informacoes } from "../../../informacoes/informacoes";

@Component({
  selector: 'app-banner-first',
  imports: [Informacoes],
  templateUrl: './banner-first.html',
  styleUrls: ['./banner-first.css']
})
export class BannerFirst {
  @Input() oferta: string = 'OPORTUNIDADE EXCLUSIVA';
  @Input() Title: string = 'Revenda a marca de beleza mais amada do Brasil';
  @Input() description: string = 'Transforme sua paixão por beleza em uma fonte de renda extra. Junte-se a milhares de revendedoras que já conquistaram sua independência financeira.';
}
