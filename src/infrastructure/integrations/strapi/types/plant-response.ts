export interface PlantResponse {
  id: number;
  attributes: {
    nome: string;
    potencia: number;
    codigoANEEL: string;
  };
}
