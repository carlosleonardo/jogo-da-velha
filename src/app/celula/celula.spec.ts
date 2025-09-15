import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Celula } from './celula';

describe('Celula', () => {
  let component: Celula;
  let fixture: ComponentFixture<Celula>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Celula]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Celula);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
