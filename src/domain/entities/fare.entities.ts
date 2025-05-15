export class Fare {
  constructor(
    public readonly id: string,
    public te: number,
    public tusd: number,
    public icms: number,
    public pis: number,
    public cofins: number,
    public distribuidora: string,
    public vigencia: Date,
  ) {}
}
