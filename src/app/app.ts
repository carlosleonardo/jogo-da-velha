import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tabuleiro} from './tabuleiro/tabuleiro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tabuleiro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jogo-da-velha');
}
