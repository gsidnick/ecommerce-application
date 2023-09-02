import { IProduct } from '../pages/products/typesProduct';

export const extractAllPrices = (productsArray: IProduct[]): number[] => {
  const allPrices: number[] = [];

  productsArray.forEach((product) => {
    product.masterData.current.masterVariant.prices?.forEach((price) => {
      allPrices.push(price.value.centAmount);
    });
    product.masterData.current.variants?.forEach((variant) => {
      variant.prices.forEach((price) => {
        allPrices.push(price.value.centAmount);
      });
    });
    product.masterData.staged.masterVariant.prices?.forEach((price) => {
      allPrices.push(price.value.centAmount);
    });
    product.masterData.staged.variants?.forEach((variant) => {
      variant.prices?.forEach((price) => {
        allPrices.push(price.value.centAmount);
      });
    });
  });

  return allPrices.sort((a, b) => a - b);
};
