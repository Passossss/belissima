import { Component } from '@angular/core';
import { BannerFirst } from "./sections/banner-first/banner-first";
import { CadastroRevendedora } from "./sections/cadastro-revendedora/cadastro-revendedora";
import { Etapas } from "./sections/etapas/etapas";
import { CallToAction } from "./sections/call-to-action/call-to-action";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerFirst, CadastroRevendedora, Etapas, CallToAction],
  template: `
    <app-banner-first></app-banner-first>
    <app-cadastro-revendedora></app-cadastro-revendedora>
    <app-etapas></app-etapas>
    <app-call-to-action></app-call-to-action>
  `
})
export class HomeComponent {

}
