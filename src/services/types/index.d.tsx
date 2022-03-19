export interface ProductItem {
  id: string;
  type: string;
  coverage: {
    min: number;
    max: number;
  };
  risk: number;
  isProductAdded?: boolean;
  calculatedPrice?: number;
}
