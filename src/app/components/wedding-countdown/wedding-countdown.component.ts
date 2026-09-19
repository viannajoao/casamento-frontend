import { Component, OnDestroy, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-wedding-countdown',
  templateUrl: './wedding-countdown.component.html',
  styleUrls: ['./wedding-countdown.component.scss']
})
export class WeddingCountdownComponent implements OnInit, OnDestroy {

 private readonly dataCasamento = new Date(
    '2027-03-14T00:00:00-03:00'
  ).getTime();

  private intervalo?: ReturnType<typeof setInterval>;

  readonly carregado = signal(false);
  readonly chegou = signal(false);

  readonly tempoRestante = signal({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  ngOnInit(): void {
    // Calcula os valores antes da primeira verificação do HTML.
    this.atualizarContagem();

    if (!this.chegou()) {
      this.intervalo = setInterval(() => {
        this.atualizarContagem();
      }, 1000);
    }
  }

  private atualizarContagem(): void {
    const agora = Date.now();

    // Impede que o contador mostre números negativos.
    const diferenca = Math.max(0, this.dataCasamento - agora);

    const totalSegundos = Math.floor(diferenca / 1000);

    this.tempoRestante.set({
      dias: Math.floor(totalSegundos / 86400),
      horas: Math.floor((totalSegundos % 86400) / 3600),
      minutos: Math.floor((totalSegundos % 3600) / 60),
      segundos: totalSegundos % 60,
    });

    this.chegou.set(diferenca === 0);
    this.carregado.set(true);

    if (this.chegou()) {
      clearInterval(this.intervalo);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}

