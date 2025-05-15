export interface CustomerResponse {
  id: number;
  attributes: {
    nome: string;
    cpf_cnpj: string;
    email: string;
    unidadeConsumidora: string;
  };
}
