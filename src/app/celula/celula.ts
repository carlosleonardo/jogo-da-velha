import {Component, inject, input, signal} from '@angular/core';
import {ServicoJogo} from '../../servico-jogo';

@Component({
  selector: 'app-celula',
  imports: [],
  templateUrl: './celula.html',
  styleUrl: './celula.css'
})
export class Celula {
  servico = inject(ServicoJogo);
  valor = signal('');
  linha = input.required<number>();
  coluna = input.required<number>();

  protected aoClicar() {
    this.valor.set(this.servico.jogadorAtual);
    this.servico.fazerJogada(this.linha(), this.coluna());
  }
}
