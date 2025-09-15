import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-celula',
  imports: [],
  templateUrl: './celula.html',
  styleUrl: './celula.css'
})
export class Celula {
  valor = signal<string | null>(null);
  protected aoClicar() {
    this.valor.set(this.valor() === 'X' ? 'O' : 'X');
  }
}
