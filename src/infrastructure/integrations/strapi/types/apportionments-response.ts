export interface ApportionmentResponse {
  id: number;
  attributes: {
    percentual: number;
    customer: {
      data: {
        id: number;
        attributes: {
          nome: string;
        };
      };
    };
    usina: {
      data: {
        id: number;
        attributes: {
          nome: string;
        };
      };
    };
  };
}
