export interface FareResponse {
  id: number;
  attributes: {
    te: number;
    tusd: number;
    icms: number;
    pis: number;
    cofins: number;
    vigencia: string;
    distribuidora?: string;
  };
}
