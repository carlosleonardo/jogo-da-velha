import { TestBed } from '@angular/core/testing';

import { ServicoJogo } from './servico-jogo';

describe('ServicoJogo', () => {
  let service: ServicoJogo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoJogo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
