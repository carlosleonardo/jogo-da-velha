import {Component, inject, OnInit} from '@angular/core';
import {Celula} from '../celula/celula';
import {ServicoJogo} from '../../servico-jogo';

@Component({
  selector: 'app-tabuleiro',
  imports: [
    Celula
  ],
  templateUrl: './tabuleiro.html',
  styleUrl: './tabuleiro.css'
})
export class Tabuleiro implements OnInit {
  ngOnInit(): void {
    this.reiniciarJogo();
  }
  protected jogo = inject(ServicoJogo);

  reiniciarJogo() {
    this.jogo.reiniciarJogo();
  }
}
