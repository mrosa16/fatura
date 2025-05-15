import { Fare } from './fare.entities';

export class Invoice {
  constructor(
    public readonly id: string,
    public customerId: string,
    public mesReferencia: string,
    public consumoKwh: number,
    public energiaCompensadaKwh: number,
    public tarifa: Fare,
    public readonly status: 'pendente' | 'pago' | 'vencido' = 'pendente',
  ) {}

  calcularEnergiaPaga(): number {
    return Math.max(this.consumoKwh - this.energiaCompensadaKwh, 0);
  }

  calcularValorBruto(): number {
    const energiaPaga = this.calcularEnergiaPaga();
    return energiaPaga * (this.tarifa.te + this.tarifa.tusd);
  }

  calcularImpostos(): number {
    const bruto = this.calcularValorBruto();
    const icms = bruto * this.tarifa.icms;
    const pis = bruto * this.tarifa.pis;
    const cofins = bruto * this.tarifa.cofins;
    return icms + pis + cofins;
  }

  calcularValorFinal(): number {
    return this.calcularValorBruto() + this.calcularImpostos();
  }
}
