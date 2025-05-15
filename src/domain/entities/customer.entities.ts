export class Customer {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public cpfCnpj: string,
    public email: string,
    public unidadeConsumidora: string,
    public distribuidora: string,
  ) {}

  isPessoaJuridica(): boolean {
    return this.cpfCnpj.length === 14;
  }
}
