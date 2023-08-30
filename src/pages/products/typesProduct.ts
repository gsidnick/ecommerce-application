interface Discount {
  typeId: string;
  id: string;
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
  discounted: {
    value: {
      type: string;
      currencyCode: string;
      centAmount: number;
      fractionDigits: number;
    };
    discount: Discount;
  };
}

interface Image {
  url: string;
  label: string;
  dimensions: {
    w: number;
    h: number;
  };
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
  images: Image[];
  attributes: Attribute[];
  assets: []; // Adjust this type if you have more information about the 'assets' structure
}

interface MasterData {
  current: {
    name: Record<string, string>;
    description?: Record<string, string>;
    categories: {
      typeId: string;
      id: string;
    }[];
    categoryOrderHints: Record<string, unknown>;
    slug: Record<string, string>;
    masterVariant: Variant;
    variants: Variant[];
    searchKeywords: Record<string, unknown>;
  };
  staged: {
    name: Record<string, string>;
    description?: Record<string, string>;
    categories: {
      typeId: string;
      id: string;
    }[];
    categoryOrderHints: Record<string, unknown>;
    slug: Record<string, string>;
    masterVariant: Variant;
    variants: Variant[];
    searchKeywords: Record<string, unknown>;
  };
  published: boolean;
  hasStagedChanges: boolean;
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
  masterData: MasterData;
  key: string;
  taxCategory?: {
    typeId: string;
    id: string;
  };
  lastVariantId: number;
  priceMode?: string;
}

export interface RespProduct {
  limit: number;
  offset: number;
  count: number;
  total: number;
  results: IProduct[];
}
