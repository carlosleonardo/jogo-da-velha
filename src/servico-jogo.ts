import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoJogo {
  matriz = signal([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  jogadorAtual: string = 'X';
  vencedor: string | null = null;
  empate: boolean = false;

  fazerJogada(linha: number, coluna: number): void {
    if (this.matriz()[linha][coluna] === '' && !this.vencedor) {
      this.matriz()[linha][coluna] = this.jogadorAtual;
      this.verificarVencedor();
      if (!this.vencedor) {
        this.verificarEmpate();
        this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
      }
    }
  }

  verificarVencedor(): void {
    const linhas = this.matriz;
    const colunas = this.matriz()[0].map((_, colIndex) => this.matriz().map(row => row[colIndex]));
    const diagonais = [
      [this.matriz()[0][0], this.matriz()[1][1], this.matriz()[2][2]],
      [this.matriz()[0][2], this.matriz()[1][1], this.matriz()[2][0]]
    ];

    const todasLinhas = [...linhas(), ...colunas, ...diagonais];

    for (const linha of todasLinhas) {
      if (linha.every(cell => cell === 'X')) {
        this.vencedor = 'X';
        return;
      }
      if (linha.every(cell => cell === 'O')) {
        this.vencedor = 'O';
        return;
      }
    }
  }

  verificarEmpate(): void {
    this.empate = this.matriz().flat().every(cell => cell !== '') && !this.vencedor;
  }

  reiniciarJogo(): void {
    this.matriz.set([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
    this.jogadorAtual = 'X';
    this.vencedor = null;
    this.empate = false;
  }
}
