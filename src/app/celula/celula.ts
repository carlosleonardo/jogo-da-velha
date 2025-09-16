import {Component, effect, inject, input, OnInit, signal} from '@angular/core';
import {ServicoJogo} from '../../servico-jogo';

@Component({
  selector: 'app-celula',
  imports: [],
  templateUrl: './celula.html',
  styleUrl: './celula.css'
})
export class Celula implements OnInit {
  jogo = inject(ServicoJogo);
  valor = signal('');
  linha = input.required<number>();
  coluna = input.required<number>();

  constructor() {
    effect(() => {
      this.atualizarCelula();
    });
  }

  ngOnInit(): void {
    this.atualizarCelula();
  }

  atualizarCelula() {
    this.valor.set(this.jogo.matriz()[this.linha()][this.coluna()]);
  }

  protected aoClicar() {
    this.valor.set(this.jogo.jogadorAtual);
    this.jogo.fazerJogada(this.linha(), this.coluna());
  }
}
