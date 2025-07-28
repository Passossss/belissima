import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerFirst } from "./components/sections/banner-first/banner-first";
import { Header } from "./components/header/header";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerFirst, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'belissima';
}
