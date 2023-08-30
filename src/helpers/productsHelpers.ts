interface ImageDimensions {
  w: number;
  h: number;
}

interface Price {
  id: string;
  value: {
    type: string;
    currencyCode: string;
    centAmount: number;
    fractionDigits: number;
  };
  country: string;
}

interface AttributeValue {
  key: string;
  label: string;
}

interface Attribute {
  name: string;
  value: AttributeValue;
}

interface Variant {
  id: number;
  sku: string;
  key: string;
  prices: Price[];
  images: {
    url: string;
    dimensions: ImageDimensions;
  }[];
  attributes: Attribute[];
  assets: string[]; // Define asset structure if needed
}

export interface IProduct {
  id: string;
  version: number;
  versionModifiedAt: string;
  lastMessageSequenceNumber: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  createdBy: {
    isPlatformClient: boolean;
    user: {
      typeId: string;
      id: string;
    };
  };
  productType: {
    typeId: string;
    id: string;
  };
  masterData: {
    current: {
      name: {
        'en-US': string;
      };
      categories: {
        typeId: string;
        id: string;
      }[];
      categoryOrderHints: Record<string, number>;
      slug: {
        'en-US': string;
      };
      masterVariant: Variant;
      variants: Variant[];
      searchKeywords: Record<string, string[]>;
    };
    staged: {
      name: {
        'en-US': string;
      };
      categories: {
        typeId: string;
        id: string;
      }[];
      categoryOrderHints: Record<string, number>;
      slug: {
        'en-US': string;
      };
      masterVariant: Variant;
      variants: Variant[];
      searchKeywords: Record<string, string[]>;
    };
    published: boolean;
    hasStagedChanges: boolean;
  };
  key: string;
  taxCategory: {
    typeId: string;
    id: string;
  };
  lastVariantId: number;
}

export const extractAllPrices = (productsArray: IProduct[]): number[] => {
  const allPrices: number[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  productsArray.forEach((product) => {
    product.masterData.current.masterVariant.prices.forEach((price) => {
      allPrices.push(price.value.centAmount);
    });
    product.masterData.current.variants.forEach((variant) => {
      variant.prices.forEach((price) => {
        allPrices.push(price.value.centAmount);
      });
    });
    product.masterData.staged.masterVariant.prices.forEach((price) => {
      allPrices.push(price.value.centAmount);
    });
    product.masterData.staged.variants.forEach((variant) => {
      variant.prices.forEach((price) => {
        allPrices.push(price.value.centAmount);
      });
    });
  });

  return allPrices.sort((a, b) => a - b);
};
