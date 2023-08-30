export const data = {
  body: {
    limit: 20,
    offset: 0,
    count: 13,
    total: 13,
    results: [
      {
        id: 'ee29d143-337d-4e51-9e80-0b9cef053106',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.585Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.585Z',
        lastModifiedAt: '2023-08-01T22:17:13.585Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '0a33a792-ee51-401c-b9a3-e340be08b0fd',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Tote Bag',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-tote-bag',
            },
            masterVariant: {
              id: 1,
              sku: '718289',
              key: '718289',
              prices: [
                {
                  id: '2737aa32-9466-4da6-a4e8-39f09b553671',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 13999,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '63d79b70-62d7-4cd9-9225-31f301a842a3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 12099,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png',
                  dimensions: {
                    w: 766,
                    h: 800,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Bag',
                    label: 'Bag',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '124965',
                key: '124965',
                prices: [
                  {
                    id: '828bdfe5-38c6-4953-9cc2-6d67f3eb252c',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 17500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: '01da05f6-6aa0-4dac-840f-ce63e20907a6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png',
                    dimensions: {
                      w: 675,
                      h: 800,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Bag',
                      label: 'Bag',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Tote Bag',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-tote-bag',
            },
            masterVariant: {
              id: 1,
              sku: '718289',
              key: '718289',
              prices: [
                {
                  id: '2737aa32-9466-4da6-a4e8-39f09b553671',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 13999,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '63d79b70-62d7-4cd9-9225-31f301a842a3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 12099,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/tote-V4lrDZ9Q.png',
                  dimensions: {
                    w: 766,
                    h: 800,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Bag',
                    label: 'Bag',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '124965',
                key: '124965',
                prices: [
                  {
                    id: '828bdfe5-38c6-4953-9cc2-6d67f3eb252c',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 17500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: '01da05f6-6aa0-4dac-840f-ce63e20907a6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/bag-371ygCjz.png',
                    dimensions: {
                      w: 675,
                      h: 800,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Bag',
                      label: 'Bag',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'tote_bag',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '917dc614-bfdf-4a52-a6b2-9e88edcf3e8f',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.737Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.737Z',
        lastModifiedAt: '2023-08-01T22:17:13.737Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '0a33a792-ee51-401c-b9a3-e340be08b0fd',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Necklace',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-necklace',
            },
            masterVariant: {
              id: 1,
              sku: '752502',
              key: '752502',
              prices: [
                {
                  id: '419029d1-d993-4205-a207-44b0fa286dd5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: '6d4ee588-b1b4-42e4-b31a-9083a54c6d7f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '76eb87de-d11d-4c30-b810-86a5c6d77011',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png',
                  dimensions: {
                    w: 103,
                    h: 122,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Jewelry',
                    label: 'Jewelry',
                  },
                },
                {
                  name: 'engraving',
                  value: 'Happy Anniversary',
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '42610',
                key: '42610',
                prices: [
                  {
                    id: '1f8fedc3-f3c9-4c42-9d4f-78ee99cd7926',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 1575,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png',
                    dimensions: {
                      w: 209,
                      h: 241,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Jewelry',
                      label: 'Jewelry',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Necklace',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-necklace',
            },
            masterVariant: {
              id: 1,
              sku: '752502',
              key: '752502',
              prices: [
                {
                  id: '419029d1-d993-4205-a207-44b0fa286dd5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: '6d4ee588-b1b4-42e4-b31a-9083a54c6d7f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '76eb87de-d11d-4c30-b810-86a5c6d77011',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 5000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-TRlWhVSq.png',
                  dimensions: {
                    w: 103,
                    h: 122,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Jewelry',
                    label: 'Jewelry',
                  },
                },
                {
                  name: 'engraving',
                  value: 'Happy Anniversary',
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '42610',
                key: '42610',
                prices: [
                  {
                    id: '1f8fedc3-f3c9-4c42-9d4f-78ee99cd7926',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 1575,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/necklace-KmP7rQDP.png',
                    dimensions: {
                      w: 209,
                      h: 241,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Jewelry',
                      label: 'Jewelry',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'necklace',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '30c1172a-0f51-4f3f-af80-d6deca2e25ba',
        version: 2,
        versionModifiedAt: '2023-08-01T22:17:14.970Z',
        lastMessageSequenceNumber: 2,
        createdAt: '2023-08-01T22:17:13.686Z',
        lastModifiedAt: '2023-08-01T22:17:14.970Z',
        lastModifiedBy: {
          isPlatformClient: true,
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '93a874d4-3d33-48ac-aa5f-e189d3ba5dd1',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Skinny Jeans',
            },
            categories: [
              {
                typeId: 'category',
                id: '7acbeb77-95ff-461a-b236-e7c38c03ecfe',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-skinny-jeans',
            },
            masterVariant: {
              id: 1,
              sku: '396594',
              key: '396594',
              prices: [
                {
                  id: '6720c75d-2e1b-49fa-a00f-239fb36c12fd',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 4999,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 4499,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
                {
                  id: '1c5fed53-41ee-4dad-b8f6-62c0e83e09a8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 4500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 4050,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg',
                  dimensions: {
                    w: 183,
                    h: 275,
                  },
                },
              ],
              attributes: [
                {
                  name: 'fit',
                  value: {
                    key: 'Slim',
                    label: 'Slim',
                  },
                },
                {
                  name: 'size',
                  value: {
                    key: 'Medium',
                    label: 'Medium',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '349700',
                key: '349700',
                prices: [
                  {
                    id: 'd4c06ead-0902-41c3-b746-7e8996707fe8',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 4999,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 4499,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: 'c496c52d-d6fa-4588-b2bc-6d2843fe4e75',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 4500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 4050,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg',
                    dimensions: {
                      w: 100,
                      h: 150,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Slim',
                      label: 'Slim',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Skinny Jeans',
            },
            categories: [
              {
                typeId: 'category',
                id: '7acbeb77-95ff-461a-b236-e7c38c03ecfe',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-skinny-jeans',
            },
            masterVariant: {
              id: 1,
              sku: '396594',
              key: '396594',
              prices: [
                {
                  id: '6720c75d-2e1b-49fa-a00f-239fb36c12fd',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 4999,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 4499,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
                {
                  id: '1c5fed53-41ee-4dad-b8f6-62c0e83e09a8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 4500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 4050,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/skinny-QJz4Jcme.jpeg',
                  dimensions: {
                    w: 183,
                    h: 275,
                  },
                },
              ],
              attributes: [
                {
                  name: 'fit',
                  value: {
                    key: 'Slim',
                    label: 'Slim',
                  },
                },
                {
                  name: 'size',
                  value: {
                    key: 'Medium',
                    label: 'Medium',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '349700',
                key: '349700',
                prices: [
                  {
                    id: 'd4c06ead-0902-41c3-b746-7e8996707fe8',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 4999,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 4499,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: 'c496c52d-d6fa-4588-b2bc-6d2843fe4e75',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 4500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 4050,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pants-qbuZJH9h.jpeg',
                    dimensions: {
                      w: 100,
                      h: 150,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Slim',
                      label: 'Slim',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'skinny_jeans',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '68be7ff5-a3b0-4d44-83bd-b1bcd800baa5',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.588Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.588Z',
        lastModifiedAt: '2023-08-01T22:17:13.588Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '0a33a792-ee51-401c-b9a3-e340be08b0fd',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Sandals',
            },
            categories: [
              {
                typeId: 'category',
                id: 'd323cdeb-915e-463d-b8f7-88bb02aba62e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-sandals',
            },
            masterVariant: {
              id: 1,
              sku: '148096',
              key: '148096',
              prices: [
                {
                  id: '1cec1354-5ede-4851-8542-0227a7aadf63',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
                {
                  id: '92c46c7f-bdaa-4bd0-a7aa-dfa423f0cddb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'ccd2893b-d0fb-401c-a460-fddcc58c4326',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '66670099-4674-4c28-b0d2-12f2e8f92844',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png',
                  dimensions: {
                    w: 227,
                    h: 222,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Shoes',
                    label: 'Shoes',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '148097',
                key: '148097',
                prices: [
                  {
                    id: 'd4e4b49c-8870-4ebe-9268-8766c5b879df',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 1199,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                  {
                    id: '060d803e-1ebc-4604-a108-68d6dfe176cb',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 1000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg',
                    dimensions: {
                      w: 219,
                      h: 230,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Shoes',
                      label: 'Shoes',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Sandals',
            },
            categories: [
              {
                typeId: 'category',
                id: 'd323cdeb-915e-463d-b8f7-88bb02aba62e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-sandals',
            },
            masterVariant: {
              id: 1,
              sku: '148096',
              key: '148096',
              prices: [
                {
                  id: '1cec1354-5ede-4851-8542-0227a7aadf63',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
                {
                  id: '92c46c7f-bdaa-4bd0-a7aa-dfa423f0cddb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'ccd2893b-d0fb-401c-a460-fddcc58c4326',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2799,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: '66670099-4674-4c28-b0d2-12f2e8f92844',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 3000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-hd5LHY6T.png',
                  dimensions: {
                    w: 227,
                    h: 222,
                  },
                },
              ],
              attributes: [
                {
                  name: 'type',
                  value: {
                    key: 'Shoes',
                    label: 'Shoes',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '148097',
                key: '148097',
                prices: [
                  {
                    id: 'd4e4b49c-8870-4ebe-9268-8766c5b879df',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 1199,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                  {
                    id: '060d803e-1ebc-4604-a108-68d6dfe176cb',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 1000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/sandals-nDN7Ajoe.jpeg',
                    dimensions: {
                      w: 219,
                      h: 230,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'type',
                    value: {
                      key: 'Shoes',
                      label: 'Shoes',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'sandals',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '5e872c36-cc56-43cb-8a14-90815436e046',
        version: 2,
        versionModifiedAt: '2023-08-01T22:17:15.036Z',
        lastMessageSequenceNumber: 2,
        createdAt: '2023-08-01T22:17:13.586Z',
        lastModifiedAt: '2023-08-01T22:17:15.036Z',
        lastModifiedBy: {
          isPlatformClient: true,
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '9ebd38f8-a882-4552-88e0-3d0bb211ad93',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Prom Dress',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-prom-dress',
            },
            masterVariant: {
              id: 1,
              sku: '711595',
              key: '711595',
              prices: [
                {
                  id: '205a5aaf-be10-42de-9276-b9cde10090fb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 24795,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 24295,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: 'fc8d1a6e-facf-42d7-b613-a4f556602eb2',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 17500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/floral-_WoTefrz.jpeg',
                  dimensions: {
                    w: 411,
                    h: 420,
                  },
                },
              ],
              attributes: [
                {
                  name: 'color',
                  value: {
                    key: 'Floral',
                    label: 'Floral',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '214452',
                key: '214452',
                prices: [
                  {
                    id: '186ea8f2-983e-456d-ba46-ba3b18150a8e',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 12500,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 12000,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                      },
                    },
                  },
                  {
                    id: 'd3b4831b-2347-493f-af90-5ca9d84abed0',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png',
                    dimensions: {
                      w: 1779,
                      h: 1920,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'color',
                    value: {
                      key: 'Pink',
                      label: 'Pink',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Prom Dress',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-prom-dress',
            },
            masterVariant: {
              id: 1,
              sku: '711595',
              key: '711595',
              prices: [
                {
                  id: '205a5aaf-be10-42de-9276-b9cde10090fb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 24795,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 24295,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: 'fc8d1a6e-facf-42d7-b613-a4f556602eb2',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 17500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/floral-_WoTefrz.jpeg',
                  dimensions: {
                    w: 411,
                    h: 420,
                  },
                },
              ],
              attributes: [
                {
                  name: 'color',
                  value: {
                    key: 'Floral',
                    label: 'Floral',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '214452',
                key: '214452',
                prices: [
                  {
                    id: '186ea8f2-983e-456d-ba46-ba3b18150a8e',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 12500,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 12000,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                      },
                    },
                  },
                  {
                    id: 'd3b4831b-2347-493f-af90-5ca9d84abed0',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress2-_nh_EhPL.png',
                    dimensions: {
                      w: 1779,
                      h: 1920,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'color',
                    value: {
                      key: 'Pink',
                      label: 'Pink',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'prom_dress',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '06617f74-547d-477f-b193-eb83be92633d',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.663Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.663Z',
        lastModifiedAt: '2023-08-01T22:17:13.663Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: 'ef77ab55-7c87-4b3c-a749-3c3482da3f31',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Sport Coat',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-sport-coat',
            },
            masterVariant: {
              id: 1,
              sku: '692457',
              key: '692457',
              prices: [
                {
                  id: 'a607ca05-8fb2-4ac3-9e26-a78a5366695b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 20000,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
                {
                  id: '91ce1773-5353-4f4f-9c69-e18dca506b37',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 15000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg',
                  dimensions: {
                    w: 225,
                    h: 225,
                  },
                },
              ],
              attributes: [
                {
                  name: 'sleeve_length',
                  value: {
                    key: 'Crop',
                    label: 'Crop',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '692458',
                key: '692458',
                prices: [
                  {
                    id: 'fc30b7ae-abb6-494a-b06d-37de4115d81d',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 20000,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                  {
                    id: '16d75e02-3aeb-49b6-90f0-64c52f274689',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg',
                    dimensions: {
                      w: 150,
                      h: 150,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'sleeve_length',
                    value: {
                      key: 'Normal',
                      label: 'Normal',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Sport Coat',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-sport-coat',
            },
            masterVariant: {
              id: 1,
              sku: '692457',
              key: '692457',
              prices: [
                {
                  id: 'a607ca05-8fb2-4ac3-9e26-a78a5366695b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 20000,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
                {
                  id: '91ce1773-5353-4f4f-9c69-e18dca506b37',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 15000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-VmXqw3Xo.jpeg',
                  dimensions: {
                    w: 225,
                    h: 225,
                  },
                },
              ],
              attributes: [
                {
                  name: 'sleeve_length',
                  value: {
                    key: 'Crop',
                    label: 'Crop',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '692458',
                key: '692458',
                prices: [
                  {
                    id: 'fc30b7ae-abb6-494a-b06d-37de4115d81d',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 20000,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                  {
                    id: '16d75e02-3aeb-49b6-90f0-64c52f274689',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 15000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/coat-Keqv_ZSU.jpeg',
                    dimensions: {
                      w: 150,
                      h: 150,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'sleeve_length',
                    value: {
                      key: 'Normal',
                      label: 'Normal',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'sport_coat',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: 'ffcd3e13-bf69-47cb-9da3-9e04934de695',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.628Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.628Z',
        lastModifiedAt: '2023-08-01T22:17:13.628Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: 'a131a3b7-8882-4415-b0f8-a537c144a72e',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Halloween Top',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-halloween-top',
            },
            masterVariant: {
              id: 1,
              sku: '888035',
              key: '888035',
              prices: [
                {
                  id: '46c8a1de-07be-49b9-92c9-79b43b34adea',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'b602fcab-9661-43db-93e4-c6ddbbd6297f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: 'ca9cdc4b-9e4c-4332-8610-89c0625bdf7d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png',
                  dimensions: {
                    w: 215,
                    h: 235,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Medium',
                    label: 'Medium',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Purple',
                    label: 'Purple',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '828329',
                key: '828329',
                prices: [
                  {
                    id: 'df90e1f3-e8ec-41e5-8244-a5d043d247d5',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 3000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: '08109cdc-bfec-4cb2-aaf8-88465ffa5e92',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 3000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: 'cff780ac-cd8e-4ebb-87d3-a41697b82891',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 3300,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/multi-TjZTRFuz.jpeg',
                    dimensions: {
                      w: 900,
                      h: 700,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Multi-Color',
                      label: 'Multi-Color',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Halloween Top',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-halloween-top',
            },
            masterVariant: {
              id: 1,
              sku: '888035',
              key: '888035',
              prices: [
                {
                  id: '46c8a1de-07be-49b9-92c9-79b43b34adea',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'b602fcab-9661-43db-93e4-c6ddbbd6297f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: 'ca9cdc4b-9e4c-4332-8610-89c0625bdf7d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/purple-5xg50uIz.png',
                  dimensions: {
                    w: 215,
                    h: 235,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Medium',
                    label: 'Medium',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Purple',
                    label: 'Purple',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '828329',
                key: '828329',
                prices: [
                  {
                    id: 'df90e1f3-e8ec-41e5-8244-a5d043d247d5',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 3000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: '08109cdc-bfec-4cb2-aaf8-88465ffa5e92',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 3000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: 'cff780ac-cd8e-4ebb-87d3-a41697b82891',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 3300,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/multi-TjZTRFuz.jpeg',
                    dimensions: {
                      w: 900,
                      h: 700,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Multi-Color',
                      label: 'Multi-Color',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: false,
          hasStagedChanges: false,
        },
        key: 'Halloween Top',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: 'ca2d709d-c074-4daf-bee5-2d0bfa75e2d1',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.586Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.586Z',
        lastModifiedAt: '2023-08-01T22:17:13.586Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: 'a131a3b7-8882-4415-b0f8-a537c144a72e',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Maternity Top',
            },
            categories: [
              {
                typeId: 'category',
                id: '71d21d3a-e6d1-4e86-b512-5ea69c0a80d4',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-maternity-top',
            },
            masterVariant: {
              id: 1,
              sku: '118716',
              key: '118716',
              prices: [
                {
                  id: 'ad3e7109-c93a-41a4-973d-d0301c817a20',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2695,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'e639f686-b698-4b06-bbe1-6d17a3d82069',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png',
                  dimensions: {
                    w: 262,
                    h: 300,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Green',
                    label: 'Green',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '118717',
                key: '118717',
                prices: [
                  {
                    id: '6e770416-923c-4126-af3e-a9d051c70bf7',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2695,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: 'f66a14ae-2ede-4f4d-b976-e349104a42b6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 2500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png',
                    dimensions: {
                      w: 262,
                      h: 300,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Green',
                      label: 'Green',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                sku: '118718',
                key: '118718',
                prices: [
                  {
                    id: '33d4c50e-7838-428d-9bcd-07863c4fd69a',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2695,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: 'e81551ce-97dc-4c35-bc40-3cadb18a3eba',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 2500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png',
                    dimensions: {
                      w: 262,
                      h: 300,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Green',
                      label: 'Green',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Maternity Top',
            },
            categories: [
              {
                typeId: 'category',
                id: '71d21d3a-e6d1-4e86-b512-5ea69c0a80d4',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-maternity-top',
            },
            masterVariant: {
              id: 1,
              sku: '118716',
              key: '118716',
              prices: [
                {
                  id: 'ad3e7109-c93a-41a4-973d-d0301c817a20',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2695,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'e639f686-b698-4b06-bbe1-6d17a3d82069',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 2500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-__gg4rwo.png',
                  dimensions: {
                    w: 262,
                    h: 300,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Green',
                    label: 'Green',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '118717',
                key: '118717',
                prices: [
                  {
                    id: '6e770416-923c-4126-af3e-a9d051c70bf7',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2695,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: 'f66a14ae-2ede-4f4d-b976-e349104a42b6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 2500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-7_8SGLVB.png',
                    dimensions: {
                      w: 262,
                      h: 300,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Green',
                      label: 'Green',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                sku: '118718',
                key: '118718',
                prices: [
                  {
                    id: '33d4c50e-7838-428d-9bcd-07863c4fd69a',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2695,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: 'e81551ce-97dc-4c35-bc40-3cadb18a3eba',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 2500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/greenshirt-lOB-DcqK.png',
                    dimensions: {
                      w: 262,
                      h: 300,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Green',
                      label: 'Green',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'maternity_top',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 3,
      },
      {
        id: '16836dfb-3c22-4c8f-b1b3-bfdaff923ea0',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.584Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.584Z',
        lastModifiedAt: '2023-08-01T22:17:13.584Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '93a874d4-3d33-48ac-aa5f-e189d3ba5dd1',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Flair Jeans',
            },
            categories: [
              {
                typeId: 'category',
                id: '7acbeb77-95ff-461a-b236-e7c38c03ecfe',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-flair-jeans',
            },
            masterVariant: {
              id: 1,
              prices: [],
              images: [],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Large',
                    label: 'Large',
                  },
                },
                {
                  name: 'fit',
                  value: {
                    key: 'Flair',
                    label: 'Flair',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Blue',
                    label: 'Blue',
                  },
                },
                {
                  name: 'length',
                  value: {
                    key: 'Crop',
                    label: 'Crop',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Flair',
                      label: 'Flair',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Black',
                      label: 'Black',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Extra Long',
                      label: 'Extra Long',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Flair Jeans',
            },
            categories: [
              {
                typeId: 'category',
                id: '7acbeb77-95ff-461a-b236-e7c38c03ecfe',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-flair-jeans',
            },
            masterVariant: {
              id: 1,
              prices: [],
              images: [],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Large',
                    label: 'Large',
                  },
                },
                {
                  name: 'fit',
                  value: {
                    key: 'Flair',
                    label: 'Flair',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'Blue',
                    label: 'Blue',
                  },
                },
                {
                  name: 'length',
                  value: {
                    key: 'Crop',
                    label: 'Crop',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Flair',
                      label: 'Flair',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'Black',
                      label: 'Black',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Extra Long',
                      label: 'Extra Long',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'flair_jeans',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: '334d02e7-aa0b-4fc6-a208-62929a5893bd',
        version: 2,
        versionModifiedAt: '2023-08-01T22:17:15.071Z',
        lastMessageSequenceNumber: 2,
        createdAt: '2023-08-01T22:17:13.692Z',
        lastModifiedAt: '2023-08-01T22:17:15.071Z',
        lastModifiedBy: {
          isPlatformClient: true,
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '9ebd38f8-a882-4552-88e0-3d0bb211ad93',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Summer Dress',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-summer-dress',
            },
            masterVariant: {
              id: 1,
              sku: '791840',
              key: '791840',
              prices: [
                {
                  id: '8c1ae926-ab61-4c30-9f11-1046d5e20e0a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 7500,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 7000,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: '03b488a2-9471-4923-8e46-a76c9dd3282b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 8000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: '1baa63d5-64ea-45f9-b647-ea47033d0a1a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 7000,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg',
                  dimensions: {
                    w: 276,
                    h: 298,
                  },
                },
              ],
              attributes: [
                {
                  name: 'color',
                  value: {
                    key: 'White',
                    label: 'White',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '439502',
                key: '439502',
                prices: [
                  {
                    id: 'ba0a337c-3397-44da-bfb5-f0771dad0ac6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: '42c59cb7-77d7-4045-805b-90e1b605b3a3',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png',
                    dimensions: {
                      w: 199,
                      h: 254,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'color',
                    value: {
                      key: 'Pink',
                      label: 'Pink',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Summer Dress',
            },
            categories: [
              {
                typeId: 'category',
                id: '41dd7f4c-07e8-4ca9-9b0a-a124416bd582',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-summer-dress',
            },
            masterVariant: {
              id: 1,
              sku: '791840',
              key: '791840',
              prices: [
                {
                  id: '8c1ae926-ab61-4c30-9f11-1046d5e20e0a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 7500,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 7000,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: '03b488a2-9471-4923-8e46-a76c9dd3282b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 8000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2125d99f-5e4e-4ab0-9c29-c390385b8274',
                    },
                  },
                },
                {
                  id: '1baa63d5-64ea-45f9-b647-ea47033d0a1a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 7000,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/dress-nsVCck7f.jpeg',
                  dimensions: {
                    w: 276,
                    h: 298,
                  },
                },
              ],
              attributes: [
                {
                  name: 'color',
                  value: {
                    key: 'White',
                    label: 'White',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '439502',
                key: '439502',
                prices: [
                  {
                    id: 'ba0a337c-3397-44da-bfb5-f0771dad0ac6',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                  {
                    id: '42c59cb7-77d7-4045-805b-90e1b605b3a3',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'AUD',
                      centAmount: 7500,
                      fractionDigits: 2,
                    },
                    country: 'AU',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/pinkdress-kKvWVHgG.png',
                    dimensions: {
                      w: 199,
                      h: 254,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'color',
                    value: {
                      key: 'Pink',
                      label: 'Pink',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: false,
          hasStagedChanges: false,
        },
        key: 'summer_dress',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: 'd3976f69-1f43-498a-a406-dc77d29afc7b',
        version: 2,
        versionModifiedAt: '2023-08-01T22:17:14.993Z',
        lastMessageSequenceNumber: 2,
        createdAt: '2023-08-01T22:17:13.737Z',
        lastModifiedAt: '2023-08-01T22:17:14.993Z',
        lastModifiedBy: {
          isPlatformClient: true,
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: '93a874d4-3d33-48ac-aa5f-e189d3ba5dd1',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Toddler Trousers',
            },
            categories: [
              {
                typeId: 'category',
                id: '310afecb-675b-4fd9-9555-9a0d2185a1b4',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-toddler-trousers',
            },
            masterVariant: {
              id: 1,
              sku: '855484',
              key: '855484',
              prices: [
                {
                  id: 'c00c6928-f26b-4bf2-978a-6160df1e7d2c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2599,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2339,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
                {
                  id: '38f89c2d-d528-4f21-8f31-4e78128a4c1c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2299,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2069,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif',
                  dimensions: {
                    w: 612,
                    h: 792,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
                {
                  name: 'fit',
                  value: {
                    key: 'Straight',
                    label: 'Straight',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'White',
                    label: 'White',
                  },
                },
                {
                  name: 'length',
                  value: {
                    key: 'Ankle',
                    label: 'Ankle',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '855485',
                key: '855485',
                prices: [
                  {
                    id: 'bf87b9b4-0ffa-4391-8f45-550ca63bf130',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2599,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 2339,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: '035a93d0-4df6-4487-b39a-2e33657c4bc2',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 2069,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif',
                    dimensions: {
                      w: 612,
                      h: 792,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Straight',
                      label: 'Straight',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'White',
                      label: 'White',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Ankle',
                      label: 'Ankle',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                sku: '855486',
                key: '855486',
                prices: [
                  {
                    id: '782ae5d4-219e-42ca-8667-54297063c1fa',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2599,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 2339,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: '1bf13609-4eb4-4e6d-887c-e45ce635ad8d',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 2069,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif',
                    dimensions: {
                      w: 612,
                      h: 792,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Straight',
                      label: 'Straight',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'White',
                      label: 'White',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Ankle',
                      label: 'Ankle',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Toddler Trousers',
            },
            categories: [
              {
                typeId: 'category',
                id: '310afecb-675b-4fd9-9555-9a0d2185a1b4',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-toddler-trousers',
            },
            masterVariant: {
              id: 1,
              sku: '855484',
              key: '855484',
              prices: [
                {
                  id: 'c00c6928-f26b-4bf2-978a-6160df1e7d2c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 2599,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2339,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
                {
                  id: '38f89c2d-d528-4f21-8f31-4e78128a4c1c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 2299,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2069,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-Z7CSIEMu.gif',
                  dimensions: {
                    w: 612,
                    h: 792,
                  },
                },
              ],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
                {
                  name: 'fit',
                  value: {
                    key: 'Straight',
                    label: 'Straight',
                  },
                },
                {
                  name: 'color',
                  value: {
                    key: 'White',
                    label: 'White',
                  },
                },
                {
                  name: 'length',
                  value: {
                    key: 'Ankle',
                    label: 'Ankle',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '855485',
                key: '855485',
                prices: [
                  {
                    id: 'bf87b9b4-0ffa-4391-8f45-550ca63bf130',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2599,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 2339,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: '035a93d0-4df6-4487-b39a-2e33657c4bc2',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 2069,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-SbjnediW.gif',
                    dimensions: {
                      w: 612,
                      h: 792,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Straight',
                      label: 'Straight',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'White',
                      label: 'White',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Ankle',
                      label: 'Ankle',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                sku: '855486',
                key: '855486',
                prices: [
                  {
                    id: '782ae5d4-219e-42ca-8667-54297063c1fa',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 2599,
                      fractionDigits: 2,
                    },
                    country: 'US',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'USD',
                        centAmount: 2339,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                  {
                    id: '1bf13609-4eb4-4e6d-887c-e45ce635ad8d',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 2299,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                    discounted: {
                      value: {
                        type: 'centPrecision',
                        currencyCode: 'EUR',
                        centAmount: 2069,
                        fractionDigits: 2,
                      },
                      discount: {
                        typeId: 'product-discount',
                        id: '2f034762-1099-4a99-9c79-a7a701085e1a',
                      },
                    },
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/whitepants-i2b2bEGD.gif',
                    dimensions: {
                      w: 612,
                      h: 792,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                  {
                    name: 'fit',
                    value: {
                      key: 'Straight',
                      label: 'Straight',
                    },
                  },
                  {
                    name: 'color',
                    value: {
                      key: 'White',
                      label: 'White',
                    },
                  },
                  {
                    name: 'length',
                    value: {
                      key: 'Ankle',
                      label: 'Ankle',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'toddler_trousers',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 3,
      },
      {
        id: '1de74be9-a1b3-4f5f-a8fc-abec916017bb',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.598Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.598Z',
        lastModifiedAt: '2023-08-01T22:17:13.598Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: 'ef77ab55-7c87-4b3c-a749-3c3482da3f31',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Denim Jacket',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-denim-jacket',
            },
            masterVariant: {
              id: 1,
              sku: '996024',
              key: '996024',
              prices: [
                {
                  id: 'eb2f476e-9f08-4881-b24a-eab61c6f7120',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 10000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'b485b7b6-f172-4d54-a4d0-fc88d2fc8a93',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 10000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
                {
                  id: '1eb5070f-c00b-452b-9734-7a19064abe28',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 9000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: 'bff4019c-9ca7-41b0-ae00-158dff00656d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 9500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg',
                  dimensions: {
                    w: 225,
                    h: 225,
                  },
                },
              ],
              attributes: [
                {
                  name: 'sleeve_length',
                  value: {
                    key: 'Normal',
                    label: 'Normal',
                  },
                },
                {
                  name: 'cotton',
                  value: false,
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '996025',
                key: '996025',
                prices: [
                  {
                    id: 'c16b8ed5-e800-43da-a82c-4c6171d26376',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 10000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: '83645b9a-a827-4bc5-8a7e-72925d2a9179',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 10000,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                  },
                  {
                    id: 'b99f6541-39b2-4708-8876-6519d8c6565f',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 9000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg',
                    dimensions: {
                      w: 225,
                      h: 225,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'sleeve_length',
                    value: {
                      key: 'Extra Long',
                      label: 'Extra Long',
                    },
                  },
                  {
                    name: 'cotton',
                    value: false,
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Denim Jacket',
            },
            categories: [
              {
                typeId: 'category',
                id: '5e093833-bcb3-4bf5-82ea-54d682423b3e',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-denim-jacket',
            },
            masterVariant: {
              id: 1,
              sku: '996024',
              key: '996024',
              prices: [
                {
                  id: 'eb2f476e-9f08-4881-b24a-eab61c6f7120',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 10000,
                    fractionDigits: 2,
                  },
                  country: 'DE',
                },
                {
                  id: 'b485b7b6-f172-4d54-a4d0-fc88d2fc8a93',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'EUR',
                    centAmount: 10000,
                    fractionDigits: 2,
                  },
                  country: 'ES',
                },
                {
                  id: '1eb5070f-c00b-452b-9734-7a19064abe28',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 9000,
                    fractionDigits: 2,
                  },
                  country: 'US',
                },
                {
                  id: 'bff4019c-9ca7-41b0-ae00-158dff00656d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'AUD',
                    centAmount: 9500,
                    fractionDigits: 2,
                  },
                  country: 'AU',
                },
              ],
              images: [
                {
                  url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-_KAoINSX.jpeg',
                  dimensions: {
                    w: 225,
                    h: 225,
                  },
                },
              ],
              attributes: [
                {
                  name: 'sleeve_length',
                  value: {
                    key: 'Normal',
                    label: 'Normal',
                  },
                },
                {
                  name: 'cotton',
                  value: false,
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                sku: '996025',
                key: '996025',
                prices: [
                  {
                    id: 'c16b8ed5-e800-43da-a82c-4c6171d26376',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 10000,
                      fractionDigits: 2,
                    },
                    country: 'DE',
                  },
                  {
                    id: '83645b9a-a827-4bc5-8a7e-72925d2a9179',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'EUR',
                      centAmount: 10000,
                      fractionDigits: 2,
                    },
                    country: 'ES',
                  },
                  {
                    id: 'b99f6541-39b2-4708-8876-6519d8c6565f',
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 9000,
                      fractionDigits: 2,
                    },
                    country: 'US',
                  },
                ],
                images: [
                  {
                    url: 'https://607c34ad0a5bf735fdf7-ec12c9005026a0c273dadf2c3ac4444b.ssl.cf3.rackcdn.com/denim-pmNAetyM.jpeg',
                    dimensions: {
                      w: 225,
                      h: 225,
                    },
                  },
                ],
                attributes: [
                  {
                    name: 'sleeve_length',
                    value: {
                      key: 'Extra Long',
                      label: 'Extra Long',
                    },
                  },
                  {
                    name: 'cotton',
                    value: false,
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: true,
          hasStagedChanges: false,
        },
        key: 'denim_jacket',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 2,
      },
      {
        id: 'b6f34a13-ed9b-4b19-bf98-9938ac4f2923',
        version: 1,
        versionModifiedAt: '2023-08-01T22:17:13.665Z',
        lastMessageSequenceNumber: 1,
        createdAt: '2023-08-01T22:17:13.665Z',
        lastModifiedAt: '2023-08-01T22:17:13.665Z',
        lastModifiedBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        createdBy: {
          isPlatformClient: true,
          user: {
            typeId: 'user',
            id: '26fb9957-171b-4125-ac65-c9ba23775d71',
          },
        },
        productType: {
          typeId: 'product-type',
          id: 'a131a3b7-8882-4415-b0f8-a537c144a72e',
        },
        masterData: {
          current: {
            name: {
              'en-US': 'Sample Anniversary Shirt',
            },
            categories: [
              {
                typeId: 'category',
                id: 'fb92918a-a7d4-4a61-9d3b-4c28747ba2d1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-anniversary-shirt',
            },
            masterVariant: {
              id: 1,
              prices: [],
              images: [],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          staged: {
            name: {
              'en-US': 'Sample Anniversary Shirt',
            },
            categories: [
              {
                typeId: 'category',
                id: 'fb92918a-a7d4-4a61-9d3b-4c28747ba2d1',
              },
            ],
            categoryOrderHints: {},
            slug: {
              'en-US': 'sample-anniversary-shirt',
            },
            masterVariant: {
              id: 1,
              prices: [],
              images: [],
              attributes: [
                {
                  name: 'size',
                  value: {
                    key: 'Small',
                    label: 'Small',
                  },
                },
              ],
              assets: [],
            },
            variants: [
              {
                id: 2,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Medium',
                      label: 'Medium',
                    },
                  },
                ],
                assets: [],
              },
              {
                id: 3,
                prices: [],
                images: [],
                attributes: [
                  {
                    name: 'size',
                    value: {
                      key: 'Large',
                      label: 'Large',
                    },
                  },
                ],
                assets: [],
              },
            ],
            searchKeywords: {},
          },
          published: false,
          hasStagedChanges: false,
        },
        key: 'anniversary_shirt',
        taxCategory: {
          typeId: 'tax-category',
          id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
        },
        lastVariantId: 3,
      },
    ],
  },
  statusCode: 200,
};
