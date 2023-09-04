import { ProductProjection } from '@commercetools/platform-sdk';

export const extractAllPrices = (
  productsArray: ProductProjection[]
): number[] => {
  const allPrices: number[] = [];

  productsArray.forEach((product) => {
    product.masterVariant.prices?.forEach((price) => {
      allPrices.push(price.value.centAmount);
    });
    product.variants?.forEach((variant) => {
      variant.prices?.forEach((price) => {
        allPrices.push(price.value.centAmount);
      });
    });
  });

  return allPrices.sort((a, b) => a - b);
};

export const extractAllBrands = (
  productsArray: ProductProjection[]
): string[] => {
  const allBrands: string[] = [];

  productsArray.forEach((product) => {
    product.masterVariant.attributes?.forEach(
      (attr: { name: string; value: { key: string; label: string } }) => {
        if (attr.name === 'brand' && !allBrands.includes(attr.value.key)) {
          allBrands.push(attr.value.key);
        }
      }
    );
    product.variants?.forEach((variant) => {
      variant.attributes?.forEach(
        (attr: { name: string; value: { key: string; label: string } }) => {
          if (attr.name === 'brand' && !allBrands.includes(attr.value.key)) {
            allBrands.push(attr.value.key);
          }
        }
      );
    });
  });

  return allBrands.sort();
};
