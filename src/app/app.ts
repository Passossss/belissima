import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerFirst } from "./components/sections/banner-first/banner-first";
import { Header } from "./components/header/header";
import { Etapas } from "./components/sections/etapas/etapas";
import { CallToAction } from "./components/sections/call-to-action/call-to-action";
import { FooterComponent } from "./components/footer/footer.component";
import { CadastroRevendedora } from "./components/sections/cadastro-revendedora/cadastro-revendedora";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerFirst, Header, Etapas, CallToAction, FooterComponent, CadastroRevendedora],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'belissima';
}
