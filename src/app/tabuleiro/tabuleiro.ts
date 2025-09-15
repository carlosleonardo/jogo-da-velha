import { Component } from '@angular/core';
import {Celula} from '../celula/celula';

@Component({
  selector: 'app-tabuleiro',
  imports: [
    Celula
  ],
  templateUrl: './tabuleiro.html',
  styleUrl: './tabuleiro.css'
})
export class Tabuleiro {

}
