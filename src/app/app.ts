import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerFirst } from "./components/sections/banner-first/banner-first";
import { Header } from "./components/header/header";
import { FooterComponent } from './components/footer/footer.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerFirst, Header, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'belissima';
}
