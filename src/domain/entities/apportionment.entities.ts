export class Apportionment {
  constructor(
    public readonly id: string,
    public plantId: string,
    public customerId: string,
    public percentual: number,
  ) {
    if (percentual < 0 || percentual > 100) {
      throw new Error('Percentual de rateio inválido');
    }
  }
}
