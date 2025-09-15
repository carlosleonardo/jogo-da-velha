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
    this.jogo.reiniciarJogo();
  }
  protected jogo = inject(ServicoJogo);
  marcarCelula(linha: number, coluna: number): void {
    this.jogo.fazerJogada(linha, coluna);
  }
}
