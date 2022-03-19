export const calculatePriceTariff = (coverage: number, risk: number) =>
  Math.floor((coverage / 100) * risk)
