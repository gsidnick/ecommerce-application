import { RespProduct } from './typesProduct';

export const data: RespProduct = {
  limit: 20,
  offset: 0,
  count: 20,
  total: 27,
  results: [
    {
      id: '6ee53b5e-2424-4b30-aa08-76916986b105',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:31.238Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:27.216Z',
      lastModifiedAt: '2023-08-29T11:46:31.238Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Les Paul Studio',
          },
          description: {
            'en-US':
              'The Les Paul Studio embodies the essential Les Paul� features with enhancements for playability and tonal versatility. The rosewood fingerboard and SlimTaper� mahogany neck provide effortless playability and comfort. The 490R and 498T pickups provide tight, high-output humbucking performance, and the two push-pull pots offer additional coil-tapping options. Now available in four fun finishes: Smokehouse Burst, Tangerine Burst, Wine Red, and Ebony.',
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-studio',
          },
          masterVariant: {
            id: 1,
            sku: 'USAYNB363DWRR',
            key: 'USAYNB363DWRR',
            prices: [
              {
                id: '484ca79a-c7b2-444c-ab6f-0db54f446e20',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 169900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 152910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2AKEWPBBfAblvhrkGYMl47/0ae5daad5099a83a0c4106357ba42a22/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_1.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6qDWRcmHBiXrDNvelfcr20/915537ef165d5e4c26011dc8efdb4f4f/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_2.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0jj3nDkOLz3rSpH5ygrhlq/117d5ca9eb0e03a2575769be03f2cbc4/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0h93k0eC1YO6IQljnsLZxm/3968bab67bfe581cc7e167209a9bc6ce/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5ki0pXJ9lwrcBvLdDcGYjl/c3ec14be3fc0c9fd03f2a16c09dbc120/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2mYxs7yu2zTsDjs3g6a28K/31ac71c63a6140c7466ee2f578b596bd/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5twD2b0atd5rW3Kj9q3tWH/de14a0b6bf7b32c7876a318c93001b9d/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1wwuTeZPz4cwGc7Y01gFC7/87754046bfd95cc003947f6a39b5dca3/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6iGj5QnsjxuoY3VrdL66BJ/9c2a779adbc84f607ee2aba1875a31f6/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/16v5VnGGqvFwm7flzqLn8l/cbefae98cb2373de113f8d0b36391744/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Dark Wine Red',
                  label: 'Dark Wine Red',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USAYNB363DWRL',
              key: 'USAYNB363DWRL',
              prices: [
                {
                  id: 'c17dd818-6731-4cf2-be36-0d2802e6f3b4',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2AKEWPBBfAblvhrkGYMl47/0ae5daad5099a83a0c4106357ba42a22/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6qDWRcmHBiXrDNvelfcr20/915537ef165d5e4c26011dc8efdb4f4f/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0jj3nDkOLz3rSpH5ygrhlq/117d5ca9eb0e03a2575769be03f2cbc4/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0h93k0eC1YO6IQljnsLZxm/3968bab67bfe581cc7e167209a9bc6ce/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5ki0pXJ9lwrcBvLdDcGYjl/c3ec14be3fc0c9fd03f2a16c09dbc120/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2mYxs7yu2zTsDjs3g6a28K/31ac71c63a6140c7466ee2f578b596bd/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5twD2b0atd5rW3Kj9q3tWH/de14a0b6bf7b32c7876a318c93001b9d/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wwuTeZPz4cwGc7Y01gFC7/87754046bfd95cc003947f6a39b5dca3/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6iGj5QnsjxuoY3VrdL66BJ/9c2a779adbc84f607ee2aba1875a31f6/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/16v5VnGGqvFwm7flzqLn8l/cbefae98cb2373de113f8d0b36391744/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USAYNB363TBR',
              key: 'USAYNB363TBR',
              prices: [
                {
                  id: 'e832b40d-1132-4105-9426-be2d5711b0a5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 159900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 143910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2HFPHtnf6aeB5Glj7ZYq7g/eb057236d54470894b8ff1fbf7603b3b/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2NKnTPqiK7QQnPdK3tL7hb/bdfae2c913443ac23d6e75e6ce9e332d/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2nS6IenMXzg0CERU9CmH85/b2d46cf4579fe365a1dcca922912b4ff/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/304sBPKvfCvwEksqyWQbh6/174aa2ffdf7289b9c0fc8b953f4ac0a4/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2fgirwJ27NXlWtiQFfZSPZ/f99d2261759534c8ffdcfc0325764e6c/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1HRImfF9zEFrebiitLYwFs/232c7fe3fe8a862d7f8e572b1377ee51/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zOpHy7KrlkA1fVhHG3Wwv/40c8c05772b38a2afddec9660288ad0c/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3e2wPISX8QlMrv71hPfxjY/a5c7cd29b5f2668023680e4be1a5a6ae/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1qzeRabZzkecmJvvBKncsX/806ab909d64429b199fcc9f71f27962d/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/17hXh8grW1zDQiYMVHVEFm/5f7be0d2d942f74b6e02bb49ff0c9963/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6v8rSvYWHUCUfio1IQZVwI/8baffa1cb689fe244bd19d24eb018c85/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Tangerine Burst',
                    label: 'Tangerine Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPST00KHCH1SBR',
              key: 'LPST00KHCH1SBR',
              prices: [
                {
                  id: 'd69d1af5-7eba-481c-889c-471a1c0d668c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/09dh2go4fizEHU5bmljVCk/606fb890d32ddad3849499cd2ca78a41/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5eAO6Ii5j2YWuPpwvNt8H1/bdfd620ddbb6eba558f157c155798f59/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/31Ns36Br2RrFqOSyCRJQvP/b5cf91eea5984085d6df08ae96bf8d81/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7EzeHVQbBuDFXd9OZpZZTq/6f6e80d59d74050fd123884b34d6c911/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/77gTgEnE7lElYjDa2NDI1J/231c6686693645d2e9a7474a8bee1702/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0BVgBJwXplHCVhMgk8MS17/1cb03c8a651d9374550c6569f9879542/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7rGTlcJPsfzrsla4ZPmU2p/19544625bf3da969fdaa2968eb031cf3/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6X5p3Zj9UZFVgFouQhhxsi/210db08b2c2b5731f4e075a792447807/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wCL5aCScoKkABfjkpo6vf/a9bde035a74014075798f2a5c85c5fce/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4JvTA4HPydNNgJVbPCqAgb/176a8b04c7bedb5b5715ae5ed2ab8e19/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4bJSByEOS7U3zOc3nh0tba/8da54d46056f768a5e1c32407db58119/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Smokehouse Burst',
                    label: 'Smokehouse Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'USAYNB363ER',
              key: 'USAYNB363ER',
              prices: [
                {
                  id: '4236677c-554d-4591-ad24-3c6827424e40',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5C1uuwjUu1vDBrrCWo9GKh/8c30ca43a516bd06464b12358a6edc3c/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ntnHHUHYg3MKXqxVRSxy8/53bf5ff1ae7497264ab9ca17d55f849e/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IPa0c4w4BwtxU26nvJ10u/6fa78dfd693568bc313553c4269028bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z7M4toR6mtCKvEwSk9A6G/ae1dbada82c486469712df92f25b2aa8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mdO1IMPj54XAwUqmPa0xg/923806953af98b1409135e0a54de7849/__static.gibson.com_product-images_USA_USAYNB363_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z81puZJpw76A6soKHv519/64ffa7cc54b44e14d3425390a3facee3/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4r0tiwbYJEjHZYqxX0FNcZ/213ccf90419146e2c4e6b9a8801674c2/__static.gibson.com_product-images_USA_USAYNB363_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mlghATCLqKtTwhjEgBAMz/07ebbc274fa1f3f40c6195376fbcdff8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0YM3E1wL9TiJpritocmeV7/700c5f7251858c45adf7dfff097a94bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6G4c6foPi0CNz2gAHdsq3b/13d70310c6a382aab28d81129ad216ce/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2G3ulImlyQGD5c1UfaaqMt/687fbeab32d8c2762b4fbdb8282d3e02/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'USAYNB363EL',
              key: 'USAYNB363EL',
              prices: [
                {
                  id: '548c1900-482d-46d8-8231-f538f103deec',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5C1uuwjUu1vDBrrCWo9GKh/8c30ca43a516bd06464b12358a6edc3c/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ntnHHUHYg3MKXqxVRSxy8/53bf5ff1ae7497264ab9ca17d55f849e/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IPa0c4w4BwtxU26nvJ10u/6fa78dfd693568bc313553c4269028bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z7M4toR6mtCKvEwSk9A6G/ae1dbada82c486469712df92f25b2aa8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mdO1IMPj54XAwUqmPa0xg/923806953af98b1409135e0a54de7849/__static.gibson.com_product-images_USA_USAYNB363_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z81puZJpw76A6soKHv519/64ffa7cc54b44e14d3425390a3facee3/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4r0tiwbYJEjHZYqxX0FNcZ/213ccf90419146e2c4e6b9a8801674c2/__static.gibson.com_product-images_USA_USAYNB363_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mlghATCLqKtTwhjEgBAMz/07ebbc274fa1f3f40c6195376fbcdff8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0YM3E1wL9TiJpritocmeV7/700c5f7251858c45adf7dfff097a94bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6G4c6foPi0CNz2gAHdsq3b/13d70310c6a382aab28d81129ad216ce/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2G3ulImlyQGD5c1UfaaqMt/687fbeab32d8c2762b4fbdb8282d3e02/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'Les Paul Studio',
          },
          description: {
            'en-US':
              'The Les Paul Studio embodies the essential Les Paul� features with enhancements for playability and tonal versatility. The rosewood fingerboard and SlimTaper� mahogany neck provide effortless playability and comfort. The 490R and 498T pickups provide tight, high-output humbucking performance, and the two push-pull pots offer additional coil-tapping options. Now available in four fun finishes: Smokehouse Burst, Tangerine Burst, Wine Red, and Ebony.',
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-studio',
          },
          masterVariant: {
            id: 1,
            sku: 'USAYNB363DWRR',
            key: 'USAYNB363DWRR',
            prices: [
              {
                id: '484ca79a-c7b2-444c-ab6f-0db54f446e20',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 169900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 152910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2AKEWPBBfAblvhrkGYMl47/0ae5daad5099a83a0c4106357ba42a22/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_1.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6qDWRcmHBiXrDNvelfcr20/915537ef165d5e4c26011dc8efdb4f4f/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_2.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0jj3nDkOLz3rSpH5ygrhlq/117d5ca9eb0e03a2575769be03f2cbc4/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0h93k0eC1YO6IQljnsLZxm/3968bab67bfe581cc7e167209a9bc6ce/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5ki0pXJ9lwrcBvLdDcGYjl/c3ec14be3fc0c9fd03f2a16c09dbc120/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2mYxs7yu2zTsDjs3g6a28K/31ac71c63a6140c7466ee2f578b596bd/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5twD2b0atd5rW3Kj9q3tWH/de14a0b6bf7b32c7876a318c93001b9d/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1wwuTeZPz4cwGc7Y01gFC7/87754046bfd95cc003947f6a39b5dca3/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6iGj5QnsjxuoY3VrdL66BJ/9c2a779adbc84f607ee2aba1875a31f6/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/16v5VnGGqvFwm7flzqLn8l/cbefae98cb2373de113f8d0b36391744/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Dark Wine Red',
                  label: 'Dark Wine Red',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USAYNB363DWRL',
              key: 'USAYNB363DWRL',
              prices: [
                {
                  id: 'c17dd818-6731-4cf2-be36-0d2802e6f3b4',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2AKEWPBBfAblvhrkGYMl47/0ae5daad5099a83a0c4106357ba42a22/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6qDWRcmHBiXrDNvelfcr20/915537ef165d5e4c26011dc8efdb4f4f/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_LPST00WRCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0jj3nDkOLz3rSpH5ygrhlq/117d5ca9eb0e03a2575769be03f2cbc4/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0h93k0eC1YO6IQljnsLZxm/3968bab67bfe581cc7e167209a9bc6ce/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5ki0pXJ9lwrcBvLdDcGYjl/c3ec14be3fc0c9fd03f2a16c09dbc120/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2mYxs7yu2zTsDjs3g6a28K/31ac71c63a6140c7466ee2f578b596bd/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5twD2b0atd5rW3Kj9q3tWH/de14a0b6bf7b32c7876a318c93001b9d/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wwuTeZPz4cwGc7Y01gFC7/87754046bfd95cc003947f6a39b5dca3/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6iGj5QnsjxuoY3VrdL66BJ/9c2a779adbc84f607ee2aba1875a31f6/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/16v5VnGGqvFwm7flzqLn8l/cbefae98cb2373de113f8d0b36391744/__static.gibson.com_product-images_USA_USAYNB363_Wine_Red_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USAYNB363TBR',
              key: 'USAYNB363TBR',
              prices: [
                {
                  id: 'e832b40d-1132-4105-9426-be2d5711b0a5',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 159900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 143910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2HFPHtnf6aeB5Glj7ZYq7g/eb057236d54470894b8ff1fbf7603b3b/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2NKnTPqiK7QQnPdK3tL7hb/bdfae2c913443ac23d6e75e6ce9e332d/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2nS6IenMXzg0CERU9CmH85/b2d46cf4579fe365a1dcca922912b4ff/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_LPST00TNCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/304sBPKvfCvwEksqyWQbh6/174aa2ffdf7289b9c0fc8b953f4ac0a4/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2fgirwJ27NXlWtiQFfZSPZ/f99d2261759534c8ffdcfc0325764e6c/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1HRImfF9zEFrebiitLYwFs/232c7fe3fe8a862d7f8e572b1377ee51/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zOpHy7KrlkA1fVhHG3Wwv/40c8c05772b38a2afddec9660288ad0c/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3e2wPISX8QlMrv71hPfxjY/a5c7cd29b5f2668023680e4be1a5a6ae/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1qzeRabZzkecmJvvBKncsX/806ab909d64429b199fcc9f71f27962d/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/17hXh8grW1zDQiYMVHVEFm/5f7be0d2d942f74b6e02bb49ff0c9963/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6v8rSvYWHUCUfio1IQZVwI/8baffa1cb689fe244bd19d24eb018c85/__static.gibson.com_product-images_USA_USAYNB363_Tangerine_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Tangerine Burst',
                    label: 'Tangerine Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPST00KHCH1SBR',
              key: 'LPST00KHCH1SBR',
              prices: [
                {
                  id: 'd69d1af5-7eba-481c-889c-471a1c0d668c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/09dh2go4fizEHU5bmljVCk/606fb890d32ddad3849499cd2ca78a41/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5eAO6Ii5j2YWuPpwvNt8H1/bdfd620ddbb6eba558f157c155798f59/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/31Ns36Br2RrFqOSyCRJQvP/b5cf91eea5984085d6df08ae96bf8d81/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_LPST00KHCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7EzeHVQbBuDFXd9OZpZZTq/6f6e80d59d74050fd123884b34d6c911/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/77gTgEnE7lElYjDa2NDI1J/231c6686693645d2e9a7474a8bee1702/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0BVgBJwXplHCVhMgk8MS17/1cb03c8a651d9374550c6569f9879542/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7rGTlcJPsfzrsla4ZPmU2p/19544625bf3da969fdaa2968eb031cf3/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6X5p3Zj9UZFVgFouQhhxsi/210db08b2c2b5731f4e075a792447807/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wCL5aCScoKkABfjkpo6vf/a9bde035a74014075798f2a5c85c5fce/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4JvTA4HPydNNgJVbPCqAgb/176a8b04c7bedb5b5715ae5ed2ab8e19/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4bJSByEOS7U3zOc3nh0tba/8da54d46056f768a5e1c32407db58119/__static.gibson.com_product-images_USA_USAYNB363_Smokehouse_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Smokehouse Burst',
                    label: 'Smokehouse Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'USAYNB363ER',
              key: 'USAYNB363ER',
              prices: [
                {
                  id: '4236677c-554d-4591-ad24-3c6827424e40',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5C1uuwjUu1vDBrrCWo9GKh/8c30ca43a516bd06464b12358a6edc3c/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ntnHHUHYg3MKXqxVRSxy8/53bf5ff1ae7497264ab9ca17d55f849e/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IPa0c4w4BwtxU26nvJ10u/6fa78dfd693568bc313553c4269028bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z7M4toR6mtCKvEwSk9A6G/ae1dbada82c486469712df92f25b2aa8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mdO1IMPj54XAwUqmPa0xg/923806953af98b1409135e0a54de7849/__static.gibson.com_product-images_USA_USAYNB363_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z81puZJpw76A6soKHv519/64ffa7cc54b44e14d3425390a3facee3/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4r0tiwbYJEjHZYqxX0FNcZ/213ccf90419146e2c4e6b9a8801674c2/__static.gibson.com_product-images_USA_USAYNB363_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mlghATCLqKtTwhjEgBAMz/07ebbc274fa1f3f40c6195376fbcdff8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0YM3E1wL9TiJpritocmeV7/700c5f7251858c45adf7dfff097a94bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6G4c6foPi0CNz2gAHdsq3b/13d70310c6a382aab28d81129ad216ce/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2G3ulImlyQGD5c1UfaaqMt/687fbeab32d8c2762b4fbdb8282d3e02/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'USAYNB363EL',
              key: 'USAYNB363EL',
              prices: [
                {
                  id: '548c1900-482d-46d8-8231-f538f103deec',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 169900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 152910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5C1uuwjUu1vDBrrCWo9GKh/8c30ca43a516bd06464b12358a6edc3c/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ntnHHUHYg3MKXqxVRSxy8/53bf5ff1ae7497264ab9ca17d55f849e/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IPa0c4w4BwtxU26nvJ10u/6fa78dfd693568bc313553c4269028bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_LPST00EBCH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z7M4toR6mtCKvEwSk9A6G/ae1dbada82c486469712df92f25b2aa8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mdO1IMPj54XAwUqmPa0xg/923806953af98b1409135e0a54de7849/__static.gibson.com_product-images_USA_USAYNB363_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3z81puZJpw76A6soKHv519/64ffa7cc54b44e14d3425390a3facee3/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4r0tiwbYJEjHZYqxX0FNcZ/213ccf90419146e2c4e6b9a8801674c2/__static.gibson.com_product-images_USA_USAYNB363_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mlghATCLqKtTwhjEgBAMz/07ebbc274fa1f3f40c6195376fbcdff8/__static.gibson.com_product-images_USA_USAYNB363_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0YM3E1wL9TiJpritocmeV7/700c5f7251858c45adf7dfff097a94bf/__static.gibson.com_product-images_USA_USAYNB363_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6G4c6foPi0CNz2gAHdsq3b/13d70310c6a382aab28d81129ad216ce/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2G3ulImlyQGD5c1UfaaqMt/687fbeab32d8c2762b4fbdb8282d3e02/__static.gibson.com_product-images_USA_USAYNB363_Ebony_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'les-paul-studio',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 6,
    },
    {
      id: 'c0a049cc-455c-4c66-968b-60c7546bac48',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:42.042Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:27.225Z',
      lastModifiedAt: '2023-08-29T11:46:42.042Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Les Paul Standard 50s Plain Top',
          },
          description: {
            'en-US':
              "The new Les Paul Standard 50s Plain Top returns to the classic design that made it relevant, played, and loved � shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of Innovation and brings authenticity back to life. The Les Paul Standard 50s Plain Top has a solid mahogany body with a plain maple top and a mahogany neck with a rounded, 50s Vintage profile with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic� bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs. The calibrated Burstbucker� 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired to audio taper potentiometers and Orange Drop� capacitors. Now available in vivid custom colors, a hardshell case completes the package. ",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s-plain-top',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS5P00M4NH1IGR',
            key: 'LPS5P00M4NH1IGR',
            prices: [
              {
                id: '231bb9e7-c170-461d-914a-7f2099d87c6f',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3mEc87SNoG0HVoO0bv1zQH/c3e3ddf2c354c8d732e8e8dfa938fd80/LPS5P00M4NH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6YMxCx3nCNCu5PYdztw5gp/1fd9419c8619907058d7d2d315994233/LPS5P00M4NH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6HjUsOqVAXZuS8PmGWOVjy/46c89b2fa713cfff6be940147312f124/LPS5P00M4NH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/42uWHlOlVdMKtF6AxlLcVR/54f13b94fa4c991f3996bc3dfe96ed39/LPS5P00M4NH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6umDn4gMnALdUr315e429V/ed9c545ab1d5b5ba464258b62a3fbe91/LPS5P00M4NH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/wx4gnrWnftegyQrLMusQW/1145cb44a5341893f2b810ce38402c27/LPS5P00M4NH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2f2FlDmwbNT6ETQCSPpwOc/0d624c0aa6569200bab6522a23a3099f/LPS5P00M4NH1_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS5P00WTNH1CWR',
              key: 'LPS5P00WTNH1CWR',
              prices: [
                {
                  id: '4110bcc6-7fe2-4b63-a1eb-6485fbf19c5d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5hnXQE1sx8lsJHJJlOs4K1/5700bd7d13bf7450fdd2d5c07413aa69/LPS5P00WTNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bRaXxEVyChCwn7t4gFEWY/a62998896ad2b77190042c9d8a70bdc0/LPS5P00WTNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1T7dppX1qyV3PzaaTP2jDU/8eebd3d0cb6c0d5dd7b45c5ff58beebf/LPS5P00WTNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/26oB1Nmk69lnBP74B8p2xf/ed6559e16cdd5542d0c764c6b43290c3/LPS5P00WTNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cCIigaRdadkVnDnRF6zNS/af126195875c549065d2f816331c5253/LPS5P00WTNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mbl95IP2KLiInaCTF51cQ/e76375091192ae4ba87ab476c23add28/LPS5P00WTNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2USbAp80Z45zjJoM3jfQc5/415d81f9bcb80232b476afd5c48ddf4d/LPS5P00WTNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Classic White',
                    label: 'Classic White',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS5P00PHNH1PBR',
              key: 'LPS5P00PHNH1PBR',
              prices: [
                {
                  id: 'ee4a73dd-765d-4391-b330-e184cf568a5a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/t1ARqb7A7arDaZKYb5Ygb/4b984f70a90d92f102b69eb93ec34b14/LPS5P00PHNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/k6Mg8jqUm0PmoyU8ouXlu/86b8e4bcb7600b8786b450cd5b185208/LPS5P00PHNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3csKJcTkTMM1ASOukh1vmx/f8dc69281bff7d4dbebce9bf1abf78d8/LPS5P00PHNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/10J42iGQUFbPMPCiXi25kH/eaebda251d3d4e3b4ab6e4ff02139d7c/LPS5P00PHNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/NekgqO1hpl4Sav5FrgGAP/e3c7853475cb099d6456a71afc550ccb/LPS5P00PHNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6WtIPaHkF2oubBRmPs8m6U/3d115cf50112cc36be0d4103d7474798/LPS5P00PHNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6tFSZKrBMLbHAvfuaHsUMU/ee42a10134d644387edbf89aacfb4106/LPS5P00PHNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Pelham Blue',
                    label: 'Pelham Blue',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS5P00ENNH1ER',
              key: 'LPS5P00ENNH1ER',
              prices: [
                {
                  id: '7df88aa1-6548-428c-9c48-4ee8db88def7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/63yeCSOaaiy8iYQAiaRU70/e8903fd09d62de24a34bec9f285add95/LPS5P00ENNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7CKydLD9xbpTKKlom37Okh/ce369fd35b1adc109f85889f572371f6/LPS5P00ENNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d8CrSPgs5V2wKR7MK7bxr/074c180f982b096e26dba13a12269cc7/LPS5P00ENNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7AgElW5XguCuPvVhYaHkix/de8bc3e6345fefdea79d75dbe8998ac0/LPS5P00ENNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sq10heJifJi1Kq0DyXlbF/d44d0d92eddc92ab64636f16f1ff4339/LPS5P00ENNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/46dJO79QWC2iKgDBiWR77d/acaf81e1a033c533b89039a9a525e842/LPS5P00ENNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2piNhyfOZklu7pg3S14igd/17d44092c2535988d3f671d885172191/LPS5P00ENNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS5P00M2NH1SBR',
              key: 'LPS5P00M2NH1SBR',
              prices: [
                {
                  id: 'dbc06018-f023-45b8-a4d1-c95cf75ca550',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4eS8a0pLPlqsbdWW5aXcoE/bc11ec1664c63a397015a50c79033ded/LPS5P00M2NH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2473KqUhJpdQW5dNJrU5CY/3a31ad378422473183a5290e0e729f1b/LPS5P00M2NH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/54MVPcYKBm5ZZo4P29OsJm/cd2c9b0c358babdd116bcfe140586268/LPS5P00M2NH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5frEVrPH5OHhhnd0NCkFVT/4838d9ade52521eae45904cebd5ef716/LPS5P00M2NH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hjJY3yJiwteUbK2MNoqOp/c60034a2ea65db13217326d463a2e642/LPS5P00M2NH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5xrw4bZz5TkBdibOmgi57U/98a2e11310b2857577f94d0c2276460d/LPS5P00M2NH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IqWHO02Y1OtQKiLBsKB8E/fee7c8816a050573f147b1862ff1dc04/LPS5P00M2NH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Sparkling Burgundy',
                    label: 'Sparkling Burgundy',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'LPS5P00TCNH1CRR',
              key: 'LPS5P00TCNH1CRR',
              prices: [
                {
                  id: '086a6307-3d85-4095-8e08-98e6637fb54c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3inrrVHYXlhKXV9ZHORsui/9eb850a849b21360f82895ed266db3e2/LPS5P00TCNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1ChyaNAsIl4g6c8uu4v26c/b663ac0f04b15d87af6b2c45b318dcea/LPS5P00TCNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4uNuiCXZ9jULGZexhKmA7U/be94e8d914cb48eb579609d152fddd6b/LPS5P00TCNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NVZZrQy1ez3ISaJjjv2zh/18babbfa33b6ac9492beac1eec2d3849/LPS5P00TCNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/50eutxosdwzNfxn2Ud7123/86fbb2ae40fb885fecc9e6b1ddedce94/LPS5P00TCNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2I0nEY69SgHaJFXGRk7SY5/b875daed907ed4b523afdf558bc94174/LPS5P00TCNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4UnJvbwJSBI8pj6BaK8G3Y/b75d37cef2cc3522e5d25a1e8292f752/LPS5P00TCNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Cardinal Red',
                    label: 'Cardinal Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'Les Paul Standard 50s Plain Top',
          },
          description: {
            'en-US':
              "The new Les Paul Standard 50s Plain Top returns to the classic design that made it relevant, played, and loved � shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of Innovation and brings authenticity back to life. The Les Paul Standard 50s Plain Top has a solid mahogany body with a plain maple top and a mahogany neck with a rounded, 50s Vintage profile with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic� bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs. The calibrated Burstbucker� 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired to audio taper potentiometers and Orange Drop� capacitors. Now available in vivid custom colors, a hardshell case completes the package. ",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s-plain-top',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS5P00M4NH1IGR',
            key: 'LPS5P00M4NH1IGR',
            prices: [
              {
                id: '231bb9e7-c170-461d-914a-7f2099d87c6f',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3mEc87SNoG0HVoO0bv1zQH/c3e3ddf2c354c8d732e8e8dfa938fd80/LPS5P00M4NH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6YMxCx3nCNCu5PYdztw5gp/1fd9419c8619907058d7d2d315994233/LPS5P00M4NH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6HjUsOqVAXZuS8PmGWOVjy/46c89b2fa713cfff6be940147312f124/LPS5P00M4NH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/42uWHlOlVdMKtF6AxlLcVR/54f13b94fa4c991f3996bc3dfe96ed39/LPS5P00M4NH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6umDn4gMnALdUr315e429V/ed9c545ab1d5b5ba464258b62a3fbe91/LPS5P00M4NH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/wx4gnrWnftegyQrLMusQW/1145cb44a5341893f2b810ce38402c27/LPS5P00M4NH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2f2FlDmwbNT6ETQCSPpwOc/0d624c0aa6569200bab6522a23a3099f/LPS5P00M4NH1_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS5P00WTNH1CWR',
              key: 'LPS5P00WTNH1CWR',
              prices: [
                {
                  id: '4110bcc6-7fe2-4b63-a1eb-6485fbf19c5d',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5hnXQE1sx8lsJHJJlOs4K1/5700bd7d13bf7450fdd2d5c07413aa69/LPS5P00WTNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bRaXxEVyChCwn7t4gFEWY/a62998896ad2b77190042c9d8a70bdc0/LPS5P00WTNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1T7dppX1qyV3PzaaTP2jDU/8eebd3d0cb6c0d5dd7b45c5ff58beebf/LPS5P00WTNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/26oB1Nmk69lnBP74B8p2xf/ed6559e16cdd5542d0c764c6b43290c3/LPS5P00WTNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cCIigaRdadkVnDnRF6zNS/af126195875c549065d2f816331c5253/LPS5P00WTNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mbl95IP2KLiInaCTF51cQ/e76375091192ae4ba87ab476c23add28/LPS5P00WTNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2USbAp80Z45zjJoM3jfQc5/415d81f9bcb80232b476afd5c48ddf4d/LPS5P00WTNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Classic White',
                    label: 'Classic White',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS5P00PHNH1PBR',
              key: 'LPS5P00PHNH1PBR',
              prices: [
                {
                  id: 'ee4a73dd-765d-4391-b330-e184cf568a5a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/t1ARqb7A7arDaZKYb5Ygb/4b984f70a90d92f102b69eb93ec34b14/LPS5P00PHNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/k6Mg8jqUm0PmoyU8ouXlu/86b8e4bcb7600b8786b450cd5b185208/LPS5P00PHNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3csKJcTkTMM1ASOukh1vmx/f8dc69281bff7d4dbebce9bf1abf78d8/LPS5P00PHNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/10J42iGQUFbPMPCiXi25kH/eaebda251d3d4e3b4ab6e4ff02139d7c/LPS5P00PHNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/NekgqO1hpl4Sav5FrgGAP/e3c7853475cb099d6456a71afc550ccb/LPS5P00PHNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6WtIPaHkF2oubBRmPs8m6U/3d115cf50112cc36be0d4103d7474798/LPS5P00PHNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6tFSZKrBMLbHAvfuaHsUMU/ee42a10134d644387edbf89aacfb4106/LPS5P00PHNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Pelham Blue',
                    label: 'Pelham Blue',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS5P00ENNH1ER',
              key: 'LPS5P00ENNH1ER',
              prices: [
                {
                  id: '7df88aa1-6548-428c-9c48-4ee8db88def7',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/63yeCSOaaiy8iYQAiaRU70/e8903fd09d62de24a34bec9f285add95/LPS5P00ENNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7CKydLD9xbpTKKlom37Okh/ce369fd35b1adc109f85889f572371f6/LPS5P00ENNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d8CrSPgs5V2wKR7MK7bxr/074c180f982b096e26dba13a12269cc7/LPS5P00ENNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7AgElW5XguCuPvVhYaHkix/de8bc3e6345fefdea79d75dbe8998ac0/LPS5P00ENNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sq10heJifJi1Kq0DyXlbF/d44d0d92eddc92ab64636f16f1ff4339/LPS5P00ENNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/46dJO79QWC2iKgDBiWR77d/acaf81e1a033c533b89039a9a525e842/LPS5P00ENNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2piNhyfOZklu7pg3S14igd/17d44092c2535988d3f671d885172191/LPS5P00ENNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS5P00M2NH1SBR',
              key: 'LPS5P00M2NH1SBR',
              prices: [
                {
                  id: 'dbc06018-f023-45b8-a4d1-c95cf75ca550',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4eS8a0pLPlqsbdWW5aXcoE/bc11ec1664c63a397015a50c79033ded/LPS5P00M2NH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2473KqUhJpdQW5dNJrU5CY/3a31ad378422473183a5290e0e729f1b/LPS5P00M2NH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/54MVPcYKBm5ZZo4P29OsJm/cd2c9b0c358babdd116bcfe140586268/LPS5P00M2NH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5frEVrPH5OHhhnd0NCkFVT/4838d9ade52521eae45904cebd5ef716/LPS5P00M2NH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hjJY3yJiwteUbK2MNoqOp/c60034a2ea65db13217326d463a2e642/LPS5P00M2NH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5xrw4bZz5TkBdibOmgi57U/98a2e11310b2857577f94d0c2276460d/LPS5P00M2NH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6IqWHO02Y1OtQKiLBsKB8E/fee7c8816a050573f147b1862ff1dc04/LPS5P00M2NH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Sparkling Burgundy',
                    label: 'Sparkling Burgundy',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'LPS5P00TCNH1CRR',
              key: 'LPS5P00TCNH1CRR',
              prices: [
                {
                  id: '086a6307-3d85-4095-8e08-98e6637fb54c',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3inrrVHYXlhKXV9ZHORsui/9eb850a849b21360f82895ed266db3e2/LPS5P00TCNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1ChyaNAsIl4g6c8uu4v26c/b663ac0f04b15d87af6b2c45b318dcea/LPS5P00TCNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4uNuiCXZ9jULGZexhKmA7U/be94e8d914cb48eb579609d152fddd6b/LPS5P00TCNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NVZZrQy1ez3ISaJjjv2zh/18babbfa33b6ac9492beac1eec2d3849/LPS5P00TCNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/50eutxosdwzNfxn2Ud7123/86fbb2ae40fb885fecc9e6b1ddedce94/LPS5P00TCNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2I0nEY69SgHaJFXGRk7SY5/b875daed907ed4b523afdf558bc94174/LPS5P00TCNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4UnJvbwJSBI8pj6BaK8G3Y/b75d37cef2cc3522e5d25a1e8292f752/LPS5P00TCNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Cardinal Red',
                    label: 'Cardinal Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'les-paul-standard-50s-plain-top',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 6,
    },
    {
      id: 'fabef0df-0bec-44d2-ae70-33061d0cc0b8',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:47.858Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:27.301Z',
      lastModifiedAt: '2023-08-29T11:46:47.858Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': "Les Paul Standard '50s",
          },
          description: {
            'en-US':
              "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard '50s has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. The calibrated Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired with audio taper potentiometers and Orange Drop® capacitors.",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS519HSNH1HCSR',
            key: 'LPS519HSNH1HCSR',
            prices: [
              {
                id: '8b63516f-1930-4138-a2d9-23fff0858567',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/11yLD2nnJYanRYcEHIvbu8/d7af425bee99e2bf7b9a40b747d3818f/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_1.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7f4Ps4PVejSlsKj7HG9VJx/2d13a198d76e41c4f93643785dd17486/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_2.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2bgXkcWszKl132vqwiWLjy/3d10bef2d131e23b781836662d0b7e2a/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_4.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0XPoMa9p3JH5MbR6RtVfvE/618e8fd328fbbd01c348f46a3a11f0ba/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1eN0UPynyscrAx3Xhm9VCc/eccc766edfe9a1800ba9991831e862c0/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7e1S9aSzsDw3iYrFaCKcY2/a14cb5cde8aa0caedd35f9e1843a8eab/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1CrlA2yjMNcan4Lw1lchfh/8d71d78298367f2faa54f3b4b9e7ad9e/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5DaxD3g7417HfL2VHJqnuN/61b2fc5b826292c0a9df01d11c2a2dae/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1S23qbayYM6QKOV9sBAUjK/e43131fbd889edadc8d80c65e01c2c09/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/51bE48cfZn9fzKMpDCpTdK/f529226391f7ffca78d1ec963b39d1b5/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7JfFvoqX8xKSRQMYcPOFtJ/db644b68b3067d478c27fd1d5dbec353/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Heritage Cherry Sunburst',
                  label: 'Heritage Cherry Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS519HSNH1HCSL',
              key: 'LPS519HSNH1HCSL',
              prices: [
                {
                  id: '5dd05ce8-38fc-461c-a3ac-842a5a7f0b1b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/11yLD2nnJYanRYcEHIvbu8/d7af425bee99e2bf7b9a40b747d3818f/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7f4Ps4PVejSlsKj7HG9VJx/2d13a198d76e41c4f93643785dd17486/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bgXkcWszKl132vqwiWLjy/3d10bef2d131e23b781836662d0b7e2a/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0XPoMa9p3JH5MbR6RtVfvE/618e8fd328fbbd01c348f46a3a11f0ba/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1eN0UPynyscrAx3Xhm9VCc/eccc766edfe9a1800ba9991831e862c0/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7e1S9aSzsDw3iYrFaCKcY2/a14cb5cde8aa0caedd35f9e1843a8eab/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1CrlA2yjMNcan4Lw1lchfh/8d71d78298367f2faa54f3b4b9e7ad9e/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5DaxD3g7417HfL2VHJqnuN/61b2fc5b826292c0a9df01d11c2a2dae/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1S23qbayYM6QKOV9sBAUjK/e43131fbd889edadc8d80c65e01c2c09/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/51bE48cfZn9fzKMpDCpTdK/f529226391f7ffca78d1ec963b39d1b5/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JfFvoqX8xKSRQMYcPOFtJ/db644b68b3067d478c27fd1d5dbec353/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Heritage Cherry Sunburst',
                    label: 'Heritage Cherry Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS5P00GTNH1GTR',
              key: 'LPS5P00GTNH1GTR',
              prices: [
                {
                  id: 'f1d5f1de-8277-4fae-bbf4-44c260fcc9db',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7G9klqQRPVeJoo5k28aGCf/c4b75bd4a604c64e73227e6c80b63bf5/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1zv47Ai6gmnzFfQN36Lw5s/f94374d4ac9c49d18001ffcd4df76d4e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1uzJB5oOeYsgocXfYM9mD1/34c04332221df59ae16e2ba3ae8c14c1/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/25X1eMmZdZ2zG4cmBU5yML/ab939d65c97f90ff5601ebdd14dddb22/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/36pCbwycl8LaZPHCDWkAqv/63f0ec797b7bfe883d726c37dd1142d3/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5azSAePT1t9RoUFMrycRSL/4d98a242c22c17fba7f2143117080f3e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7xYKlJDopi4OJOUcPUqRLA/e91d41e03c0a76d403e2cd7b1b1207cd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4ClN4JOR5LlMcWAznweyVo/335c6c47f13b27116e17b7a6459fc85e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fWWnuTDzdeoWHDK8wcqDg/ab9ec8b3d63b8a3c438882325d52138a/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1r3USL1gV9bl0xhxIl683w/2b480832876ff123b9a381a4d6f96abd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mU3d8rfrQZLPI2qNpa7FD/ad16aa82c248a8f2d9f8b0bf5effe9de/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Gold Top',
                    label: 'Gold Top',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS5P00GTNH1GTL',
              key: 'LPS5P00GTNH1GTL',
              prices: [
                {
                  id: '90c2f11a-32c8-4a23-977f-14583c5a5ebb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7G9klqQRPVeJoo5k28aGCf/c4b75bd4a604c64e73227e6c80b63bf5/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1zv47Ai6gmnzFfQN36Lw5s/f94374d4ac9c49d18001ffcd4df76d4e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1uzJB5oOeYsgocXfYM9mD1/34c04332221df59ae16e2ba3ae8c14c1/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/25X1eMmZdZ2zG4cmBU5yML/ab939d65c97f90ff5601ebdd14dddb22/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/36pCbwycl8LaZPHCDWkAqv/63f0ec797b7bfe883d726c37dd1142d3/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5azSAePT1t9RoUFMrycRSL/4d98a242c22c17fba7f2143117080f3e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7xYKlJDopi4OJOUcPUqRLA/e91d41e03c0a76d403e2cd7b1b1207cd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4ClN4JOR5LlMcWAznweyVo/335c6c47f13b27116e17b7a6459fc85e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fWWnuTDzdeoWHDK8wcqDg/ab9ec8b3d63b8a3c438882325d52138a/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1r3USL1gV9bl0xhxIl683w/2b480832876ff123b9a381a4d6f96abd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mU3d8rfrQZLPI2qNpa7FD/ad16aa82c248a8f2d9f8b0bf5effe9de/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Gold Top',
                    label: 'Gold Top',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS500TONH1TBR',
              key: 'LPS500TONH1TBR',
              prices: [
                {
                  id: '86c2b0f7-f61e-479f-a7fd-0faa3260d266',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1N6niHltSzlAzAgjYhEGG9/0c7471cb92088cd367a47b04c9ccb694/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPS500TONH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WLyyJzsddrzXHZ4DA9RCH/a994035bda406257917b71b10cf49242/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPS500TONH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0jFuzuOvOXCdLiUUwhKnJi/e479cb470c0e2d0fafa2d1e0f0a24b85/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPTR00FHNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4sOHmtX6KRUQnrqPPZXnF5/b917ed19d679286d805bec76e0d85d7a/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6hQM3DI2VvEt82rBhsKREe/5e968e88a07df15a1345d18394987fb6/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7e93GDOsbQ2k63fJDhO2xK/620ef4e5fd4e5e7e1df54457b2c3e0c7/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2sKXuIAjn8tW2a39ALHgFs/f72033d2be23942867a3dbed1043e1a9/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4unVgEff4kljjdzrRZkhXI/ed39deb7f177a7a32912dbd7d579aa8e/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2zxSraSB3xXrSqBDxfRZjP/8ff116e45259cf59045500efe9cf1dfa/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7ztSBCwSRSR2dIM2K3OZyl/e23e1aca4bdd4887ff94d091a54d966b/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uza5yslvfRq4Z2iKfyNnK/e8a3e48b7c9deed702dfa362da5687f6/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Tobacco Burst',
                    label: 'Tobacco Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': "Les Paul Standard '50s",
          },
          description: {
            'en-US':
              "The new Les Paul™ Standard returns to the classic design that made it relevant, played, and loved – shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of innovation and brings authenticity back to life. The Les Paul Standard '50s has a solid mahogany body with a maple top and a rounded 50s-style mahogany neck with a rosewood fingerboard and trapezoid inlays. It's equipped with an ABR-1, the classic-style Tune-O-Matic™ bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and aged gold Top Hat knobs. The calibrated Burstbucker™ 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired with audio taper potentiometers and Orange Drop® capacitors.",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS519HSNH1HCSR',
            key: 'LPS519HSNH1HCSR',
            prices: [
              {
                id: '8b63516f-1930-4138-a2d9-23fff0858567',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/11yLD2nnJYanRYcEHIvbu8/d7af425bee99e2bf7b9a40b747d3818f/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_1.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7f4Ps4PVejSlsKj7HG9VJx/2d13a198d76e41c4f93643785dd17486/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_2.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2bgXkcWszKl132vqwiWLjy/3d10bef2d131e23b781836662d0b7e2a/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_4.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0XPoMa9p3JH5MbR6RtVfvE/618e8fd328fbbd01c348f46a3a11f0ba/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1eN0UPynyscrAx3Xhm9VCc/eccc766edfe9a1800ba9991831e862c0/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7e1S9aSzsDw3iYrFaCKcY2/a14cb5cde8aa0caedd35f9e1843a8eab/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1CrlA2yjMNcan4Lw1lchfh/8d71d78298367f2faa54f3b4b9e7ad9e/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5DaxD3g7417HfL2VHJqnuN/61b2fc5b826292c0a9df01d11c2a2dae/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1S23qbayYM6QKOV9sBAUjK/e43131fbd889edadc8d80c65e01c2c09/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/51bE48cfZn9fzKMpDCpTdK/f529226391f7ffca78d1ec963b39d1b5/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7JfFvoqX8xKSRQMYcPOFtJ/db644b68b3067d478c27fd1d5dbec353/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Heritage Cherry Sunburst',
                  label: 'Heritage Cherry Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS519HSNH1HCSL',
              key: 'LPS519HSNH1HCSL',
              prices: [
                {
                  id: '5dd05ce8-38fc-461c-a3ac-842a5a7f0b1b',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/11yLD2nnJYanRYcEHIvbu8/d7af425bee99e2bf7b9a40b747d3818f/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7f4Ps4PVejSlsKj7HG9VJx/2d13a198d76e41c4f93643785dd17486/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bgXkcWszKl132vqwiWLjy/3d10bef2d131e23b781836662d0b7e2a/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_LPS519HSNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0XPoMa9p3JH5MbR6RtVfvE/618e8fd328fbbd01c348f46a3a11f0ba/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1eN0UPynyscrAx3Xhm9VCc/eccc766edfe9a1800ba9991831e862c0/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7e1S9aSzsDw3iYrFaCKcY2/a14cb5cde8aa0caedd35f9e1843a8eab/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1CrlA2yjMNcan4Lw1lchfh/8d71d78298367f2faa54f3b4b9e7ad9e/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5DaxD3g7417HfL2VHJqnuN/61b2fc5b826292c0a9df01d11c2a2dae/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1S23qbayYM6QKOV9sBAUjK/e43131fbd889edadc8d80c65e01c2c09/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/51bE48cfZn9fzKMpDCpTdK/f529226391f7ffca78d1ec963b39d1b5/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JfFvoqX8xKSRQMYcPOFtJ/db644b68b3067d478c27fd1d5dbec353/__static.gibson.com_product-images_USA_USAUBC849_Heritage_Cherry_Sunburst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Heritage Cherry Sunburst',
                    label: 'Heritage Cherry Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS5P00GTNH1GTR',
              key: 'LPS5P00GTNH1GTR',
              prices: [
                {
                  id: 'f1d5f1de-8277-4fae-bbf4-44c260fcc9db',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7G9klqQRPVeJoo5k28aGCf/c4b75bd4a604c64e73227e6c80b63bf5/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1zv47Ai6gmnzFfQN36Lw5s/f94374d4ac9c49d18001ffcd4df76d4e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1uzJB5oOeYsgocXfYM9mD1/34c04332221df59ae16e2ba3ae8c14c1/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/25X1eMmZdZ2zG4cmBU5yML/ab939d65c97f90ff5601ebdd14dddb22/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/36pCbwycl8LaZPHCDWkAqv/63f0ec797b7bfe883d726c37dd1142d3/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5azSAePT1t9RoUFMrycRSL/4d98a242c22c17fba7f2143117080f3e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7xYKlJDopi4OJOUcPUqRLA/e91d41e03c0a76d403e2cd7b1b1207cd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4ClN4JOR5LlMcWAznweyVo/335c6c47f13b27116e17b7a6459fc85e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fWWnuTDzdeoWHDK8wcqDg/ab9ec8b3d63b8a3c438882325d52138a/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1r3USL1gV9bl0xhxIl683w/2b480832876ff123b9a381a4d6f96abd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mU3d8rfrQZLPI2qNpa7FD/ad16aa82c248a8f2d9f8b0bf5effe9de/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Gold Top',
                    label: 'Gold Top',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS5P00GTNH1GTL',
              key: 'LPS5P00GTNH1GTL',
              prices: [
                {
                  id: '90c2f11a-32c8-4a23-977f-14583c5a5ebb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7G9klqQRPVeJoo5k28aGCf/c4b75bd4a604c64e73227e6c80b63bf5/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1zv47Ai6gmnzFfQN36Lw5s/f94374d4ac9c49d18001ffcd4df76d4e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1uzJB5oOeYsgocXfYM9mD1/34c04332221df59ae16e2ba3ae8c14c1/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_LPS5P00GTNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/25X1eMmZdZ2zG4cmBU5yML/ab939d65c97f90ff5601ebdd14dddb22/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/36pCbwycl8LaZPHCDWkAqv/63f0ec797b7bfe883d726c37dd1142d3/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5azSAePT1t9RoUFMrycRSL/4d98a242c22c17fba7f2143117080f3e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7xYKlJDopi4OJOUcPUqRLA/e91d41e03c0a76d403e2cd7b1b1207cd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4ClN4JOR5LlMcWAznweyVo/335c6c47f13b27116e17b7a6459fc85e/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fWWnuTDzdeoWHDK8wcqDg/ab9ec8b3d63b8a3c438882325d52138a/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1r3USL1gV9bl0xhxIl683w/2b480832876ff123b9a381a4d6f96abd/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3mU3d8rfrQZLPI2qNpa7FD/ad16aa82c248a8f2d9f8b0bf5effe9de/__static.gibson.com_product-images_USA_USAUBC849_Gold_Top_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Gold Top',
                    label: 'Gold Top',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS500TONH1TBR',
              key: 'LPS500TONH1TBR',
              prices: [
                {
                  id: '86c2b0f7-f61e-479f-a7fd-0faa3260d266',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1N6niHltSzlAzAgjYhEGG9/0c7471cb92088cd367a47b04c9ccb694/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPS500TONH1_1.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WLyyJzsddrzXHZ4DA9RCH/a994035bda406257917b71b10cf49242/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPS500TONH1_2.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0jFuzuOvOXCdLiUUwhKnJi/e479cb470c0e2d0fafa2d1e0f0a24b85/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_LPTR00FHNH1_4.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4sOHmtX6KRUQnrqPPZXnF5/b917ed19d679286d805bec76e0d85d7a/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6hQM3DI2VvEt82rBhsKREe/5e968e88a07df15a1345d18394987fb6/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7e93GDOsbQ2k63fJDhO2xK/620ef4e5fd4e5e7e1df54457b2c3e0c7/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2sKXuIAjn8tW2a39ALHgFs/f72033d2be23942867a3dbed1043e1a9/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4unVgEff4kljjdzrRZkhXI/ed39deb7f177a7a32912dbd7d579aa8e/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2zxSraSB3xXrSqBDxfRZjP/8ff116e45259cf59045500efe9cf1dfa/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7ztSBCwSRSR2dIM2K3OZyl/e23e1aca4bdd4887ff94d091a54d966b/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_beauty-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uza5yslvfRq4Z2iKfyNnK/e8a3e48b7c9deed702dfa362da5687f6/__static.gibson.com_product-images_USA_USAUBC849_Tobacco_Burst_beauty-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Tobacco Burst',
                    label: 'Tobacco Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'les-paul-standard-50s',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 5,
    },
    {
      id: '2711184c-a40a-4dcd-8761-57b3730aa276',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:48.847Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:27.301Z',
      lastModifiedAt: '2023-08-29T11:46:48.847Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Les Paul Standard 50s Figured Top',
          },
          description: {
            'en-US':
              "The Les Paul� Standard 50s Figured Top returns to the classic design that made it relevant, played, and loved � shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of Innovation and brings authenticity back to life. It boasts a solid mahogany body, an AA figured maple top, and a distinctive translucent custom color nitrocellulose lacquer finish that showcases the figured maple top. The mahogany neck has a rounded 50s Vintage profile and a rosewood fingerboard with trapezoid inlays. The Les Paul Standard 50s Figured Top is equipped with an ABR-1, the classic-style Tune-O-Matic� bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs. The calibrated Burstbucker� 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired to audio taper potentiometers and Orange Drop� capacitors. A hardshell case is also included.",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s-figured-top',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS500TFNH1TFR',
            key: 'LPS500TFNH1TFR',
            prices: [
              {
                id: 'febf4617-81d5-4794-99b2-751ebfc1004a',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2n29xJuQQCNr3stZLot7xn/259ad8eb04d2cd5e1aad6d6ad8a79b74/LPS500TFNH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1uSCknK6t0V6fdFCt8tq6I/50f637affbef1f95df68fc74ea54c5ca/LPS500TFNH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/54Jq5b0spi9c4M39bxEvrL/c82257defb14bf972ebedfd85e3b73c2/LPS500TFNH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6TH5eRnwI1irIk6360g3IY/13160ca9849acfb0fc72f5b0990678fa/LPS500TFNH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5jqN6dfeRLJVp6DVSLi74V/c9f31510659f5b095ff43532b54ed9f4/LPS500TFNH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3JjSTnaIy8Ld4Si17WvdZp/610b7950d974aa0c05af3ad5d58222e3/LPS500TFNH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7lzmUNqX51Wey0WIk3n2sN/e79f4cbc6236deb2940ad3c2d0691502/LPS500TFNH1_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Translucent Fuchsia',
                  label: 'Translucent Fuchsia',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS500HYNH1HAR',
              key: 'LPS500HYNH1HAR',
              prices: [
                {
                  id: 'cbbceeae-fd31-4d62-8a60-2684ff7df07a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1grSyeksExq10rgdobvBFg/f99a8fd7933847b9b8c35e0ecdd3e463/LPS500HYNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1VNAfjlN8yh8oWjXF2xwnD/e5af3e112669c1ccbeabc91cef7372ce/LPS500HYNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/600MtNY8yPKNg8uqwn4kr1/3a67e6010ec1db50e0cc446bfc6c2277/LPS500HYNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1dx2lUkhhnnWvSVyBYj0OV/531a565ed8a5326879f2c7b7716547da/LPS500HYNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7yr6RDqLbenTUtubFSJ7d1/5eb444b725f7ec9dcc5d0c01ad5a7d48/LPS500HYNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3pOcCgQ6nWsN9tPmKgG5dC/3cd38ec1bfd598dda67b529acc1620de/LPS500HYNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wCV2LQv5HlbPUXQFQHbCt/46854e079f4ae36ae75e03308f3248d4/LPS500HYNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Honey Amber',
                    label: 'Honey Amber',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS500B9NH1BBR',
              key: 'LPS500B9NH1BBR',
              prices: [
                {
                  id: '5c3915e3-47e2-42fe-84c0-aa24fe06438f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6x0kH6BvrVprciWYP91WnH/5e3dae1957ceeb542d3c84fd06b2a739/LPS500B9NH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KUaj7vT25V4pBvvfQw9eS/9b728cb09fea66ec14c502f85e472423/LPS500B9NH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/FtEmbubJVbun2FKgx1n4F/4926dd5925d98960002cef11ce96e276/LPS500B9NH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7GlJuDMG7CESyeZZ2op58x/be09b46f9922852043b71a5f81e76d61/LPS500B9NH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4mP3EXvw4Vd8CAG1jwOZDj/4a0edb34d9d5af982b253954e13191d9/LPS500B9NH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ZFafYlJBHzEgTmA2PDN4L/7244ceb138fa258fbd69c3975a50794f/LPS500B9NH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gnLGBVSsLmABM30PiTyUK/7d8444bcfac86dd57e55e7a2344d86fb/LPS500B9NH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Blueberry Burst',
                    label: 'Blueberry Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS500OBNH1OBR',
              key: 'LPS500OBNH1OBR',
              prices: [
                {
                  id: '8340f010-4160-49bd-be88-e355b19255a6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fJWgT1WddXMe3zoHj07g7/56d2a1c8cadbe96123dabe217ab7308d/LPS500OBNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vXBSiADoVplatvFrsglG7/7115c7416c9938a972651687a673ff0a/LPS500OBNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6QeLxTTLvc0M2QBhCymACR/7f2e710c0941caa3465947d9874e93c0/LPS500OBNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5hleSU1WeZlOfIAZ5og9X7/ab1420513bb71d2f3677a35256aa2445/LPS500OBNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3v6yp1jqq71D9nqboCzGLd/4857f73854caac8b918f51154112de27/LPS500OBNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/iBWX9TQzIQZegLcyoFAt3/3fe0c0bc6ccabe7e13561bcc64f3f110/LPS500OBNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6JXHVQzeg9oMS9ynrdXOkk/98c22a73b6745c4b8435bf0d6c2e5e50/LPS500OBNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ocean Blue',
                    label: 'Ocean Blue',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS500SCNH160CR',
              key: 'LPS500SCNH160CR',
              prices: [
                {
                  id: 'd15c937d-ffcd-4a3d-a46e-f227b21e8907',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6gSTB8QBh6A8ECoG37rclr/394c518f46c6232c8cc0fd52ba04b604/LPS500SCNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/62JSqwNQhlce8RIWoEEeyl/a1154520e2422890c5ac58930d04ca28/LPS500SCNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1aHSLKMWZtc9rgvAdoB9r3/cc0fae47479149922439ea84da143984/LPS500SCNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/59vpr31si9DJs5fSkU2sCj/1dd227d9650b1ef78696ae89e64f8bb9/LPS500SCNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5WZfq5h0p9BI4l2gfXtXfC/f80b7ad36d169a951a74ba9709c20747/LPS500SCNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7MjhqZjXzbqtvJBuvKnqXK/c257e81d551852b08151a14697ace369/LPS500SCNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/12eI5XtGfH1v6TeCYLv1Hj/ae97214e69dd41f44de2f91b50a6b969/LPS500SCNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: '60s Cherry',
                    label: '60s Cherry',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'LPS500OXNH1TOR',
              key: 'LPS500OXNH1TOR',
              prices: [
                {
                  id: 'b188b149-e5c5-4b23-9d86-da874df15c04',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2VEZrJe5ywoyT63zIEhoTw/463a9a369cf9369cc4a2bf0b12f4353a/LPS500OXNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4gOiJfAWiRntjb2nOVmVzc/4928ed44f58a5b239a29c7be40eaa84c/LPS500OXNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/73mczfv6fijGjGjYF0Syyb/5e32756b3f53ecb34f7c44895abf5fc8/LPS500OXNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1JhCuXwvZf5unpFqNZQu7O/0307b68a2e93cd484bb21dfb09001283/LPS500OXNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TniYiZJD8NBVimcvev1bV/683424a094fed51902d09866cc51dc18/LPS500OXNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WJEF05A4Kc599Y94U4utA/7db7230563a9340bfe3149cf28818fc2/LPS500OXNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vXJOlqBxgczzrPS0G0NVQ/fca8acbafbd90c09182daf7e860ef742/LPS500OXNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Translucent Oxblood',
                    label: 'Translucent Oxblood',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'Les Paul Standard 50s Figured Top',
          },
          description: {
            'en-US':
              "The Les Paul� Standard 50s Figured Top returns to the classic design that made it relevant, played, and loved � shaping sound across generations and genres of music. It pays tribute to Gibson's Golden Era of Innovation and brings authenticity back to life. It boasts a solid mahogany body, an AA figured maple top, and a distinctive translucent custom color nitrocellulose lacquer finish that showcases the figured maple top. The mahogany neck has a rounded 50s Vintage profile and a rosewood fingerboard with trapezoid inlays. The Les Paul Standard 50s Figured Top is equipped with an ABR-1, the classic-style Tune-O-Matic� bridge, an aluminum Stop Bar tailpiece, Vintage Deluxe tuners with Keystone buttons, and gold Top Hat knobs. The calibrated Burstbucker� 1 (neck) and Burstbucker 2 (bridge) pickups are loaded with Alnico 2 magnets and wired to audio taper potentiometers and Orange Drop� capacitors. A hardshell case is also included.",
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-standard-50s-figured-top',
          },
          masterVariant: {
            id: 1,
            sku: 'LPS500TFNH1TFR',
            key: 'LPS500TFNH1TFR',
            prices: [
              {
                id: 'febf4617-81d5-4794-99b2-751ebfc1004a',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2n29xJuQQCNr3stZLot7xn/259ad8eb04d2cd5e1aad6d6ad8a79b74/LPS500TFNH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1uSCknK6t0V6fdFCt8tq6I/50f637affbef1f95df68fc74ea54c5ca/LPS500TFNH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/54Jq5b0spi9c4M39bxEvrL/c82257defb14bf972ebedfd85e3b73c2/LPS500TFNH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6TH5eRnwI1irIk6360g3IY/13160ca9849acfb0fc72f5b0990678fa/LPS500TFNH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5jqN6dfeRLJVp6DVSLi74V/c9f31510659f5b095ff43532b54ed9f4/LPS500TFNH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3JjSTnaIy8Ld4Si17WvdZp/610b7950d974aa0c05af3ad5d58222e3/LPS500TFNH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7lzmUNqX51Wey0WIk3n2sN/e79f4cbc6236deb2940ad3c2d0691502/LPS500TFNH1_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Translucent Fuchsia',
                  label: 'Translucent Fuchsia',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'LPS500HYNH1HAR',
              key: 'LPS500HYNH1HAR',
              prices: [
                {
                  id: 'cbbceeae-fd31-4d62-8a60-2684ff7df07a',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1grSyeksExq10rgdobvBFg/f99a8fd7933847b9b8c35e0ecdd3e463/LPS500HYNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1VNAfjlN8yh8oWjXF2xwnD/e5af3e112669c1ccbeabc91cef7372ce/LPS500HYNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/600MtNY8yPKNg8uqwn4kr1/3a67e6010ec1db50e0cc446bfc6c2277/LPS500HYNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1dx2lUkhhnnWvSVyBYj0OV/531a565ed8a5326879f2c7b7716547da/LPS500HYNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7yr6RDqLbenTUtubFSJ7d1/5eb444b725f7ec9dcc5d0c01ad5a7d48/LPS500HYNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3pOcCgQ6nWsN9tPmKgG5dC/3cd38ec1bfd598dda67b529acc1620de/LPS500HYNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1wCV2LQv5HlbPUXQFQHbCt/46854e079f4ae36ae75e03308f3248d4/LPS500HYNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Honey Amber',
                    label: 'Honey Amber',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'LPS500B9NH1BBR',
              key: 'LPS500B9NH1BBR',
              prices: [
                {
                  id: '5c3915e3-47e2-42fe-84c0-aa24fe06438f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6x0kH6BvrVprciWYP91WnH/5e3dae1957ceeb542d3c84fd06b2a739/LPS500B9NH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KUaj7vT25V4pBvvfQw9eS/9b728cb09fea66ec14c502f85e472423/LPS500B9NH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/FtEmbubJVbun2FKgx1n4F/4926dd5925d98960002cef11ce96e276/LPS500B9NH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7GlJuDMG7CESyeZZ2op58x/be09b46f9922852043b71a5f81e76d61/LPS500B9NH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4mP3EXvw4Vd8CAG1jwOZDj/4a0edb34d9d5af982b253954e13191d9/LPS500B9NH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ZFafYlJBHzEgTmA2PDN4L/7244ceb138fa258fbd69c3975a50794f/LPS500B9NH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gnLGBVSsLmABM30PiTyUK/7d8444bcfac86dd57e55e7a2344d86fb/LPS500B9NH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Blueberry Burst',
                    label: 'Blueberry Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'LPS500OBNH1OBR',
              key: 'LPS500OBNH1OBR',
              prices: [
                {
                  id: '8340f010-4160-49bd-be88-e355b19255a6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fJWgT1WddXMe3zoHj07g7/56d2a1c8cadbe96123dabe217ab7308d/LPS500OBNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vXBSiADoVplatvFrsglG7/7115c7416c9938a972651687a673ff0a/LPS500OBNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6QeLxTTLvc0M2QBhCymACR/7f2e710c0941caa3465947d9874e93c0/LPS500OBNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5hleSU1WeZlOfIAZ5og9X7/ab1420513bb71d2f3677a35256aa2445/LPS500OBNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3v6yp1jqq71D9nqboCzGLd/4857f73854caac8b918f51154112de27/LPS500OBNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/iBWX9TQzIQZegLcyoFAt3/3fe0c0bc6ccabe7e13561bcc64f3f110/LPS500OBNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6JXHVQzeg9oMS9ynrdXOkk/98c22a73b6745c4b8435bf0d6c2e5e50/LPS500OBNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ocean Blue',
                    label: 'Ocean Blue',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 5,
              sku: 'LPS500SCNH160CR',
              key: 'LPS500SCNH160CR',
              prices: [
                {
                  id: 'd15c937d-ffcd-4a3d-a46e-f227b21e8907',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6gSTB8QBh6A8ECoG37rclr/394c518f46c6232c8cc0fd52ba04b604/LPS500SCNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/62JSqwNQhlce8RIWoEEeyl/a1154520e2422890c5ac58930d04ca28/LPS500SCNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1aHSLKMWZtc9rgvAdoB9r3/cc0fae47479149922439ea84da143984/LPS500SCNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/59vpr31si9DJs5fSkU2sCj/1dd227d9650b1ef78696ae89e64f8bb9/LPS500SCNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5WZfq5h0p9BI4l2gfXtXfC/f80b7ad36d169a951a74ba9709c20747/LPS500SCNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7MjhqZjXzbqtvJBuvKnqXK/c257e81d551852b08151a14697ace369/LPS500SCNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/12eI5XtGfH1v6TeCYLv1Hj/ae97214e69dd41f44de2f91b50a6b969/LPS500SCNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: '60s Cherry',
                    label: '60s Cherry',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 6,
              sku: 'LPS500OXNH1TOR',
              key: 'LPS500OXNH1TOR',
              prices: [
                {
                  id: 'b188b149-e5c5-4b23-9d86-da874df15c04',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2VEZrJe5ywoyT63zIEhoTw/463a9a369cf9369cc4a2bf0b12f4353a/LPS500OXNH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4gOiJfAWiRntjb2nOVmVzc/4928ed44f58a5b239a29c7be40eaa84c/LPS500OXNH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/73mczfv6fijGjGjYF0Syyb/5e32756b3f53ecb34f7c44895abf5fc8/LPS500OXNH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1JhCuXwvZf5unpFqNZQu7O/0307b68a2e93cd484bb21dfb09001283/LPS500OXNH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TniYiZJD8NBVimcvev1bV/683424a094fed51902d09866cc51dc18/LPS500OXNH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WJEF05A4Kc599Y94U4utA/7db7230563a9340bfe3149cf28818fc2/LPS500OXNH1_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vXJOlqBxgczzrPS0G0NVQ/fca8acbafbd90c09182daf7e860ef742/LPS500OXNH1_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Translucent Oxblood',
                    label: 'Translucent Oxblood',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'les-paul-standard-50s-figured-top',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 6,
    },
    {
      id: '6eaeb63e-16ad-436b-a57c-f3f24c809397',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:43.213Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:27.276Z',
      lastModifiedAt: '2023-08-29T11:46:43.213Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Les Paul Special Tribute',
          },
          description: {
            'en-US':
              'The all-new Gibson Les Paul Special Tribute offers players a new take on a classic design. The special treatment starts with a mahogany body fitted with 490R and 490T open-coil humbucking pickups for rich, classic Gibson tones. Vintage deluxe white button tuners and a compensated wrap-around tailpiece keep things simple and elegant. Comfort and playability will always be on tap thanks to the Rounded profile maple neck and true rosewood fingerboard. You could say that this one is a sonic special delivery. Available in timeless satin finishes � Worn White, Vintage Cherry, Ebony, and Natural Walnut.',
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-special-tribute',
          },
          masterVariant: {
            id: 1,
            sku: 'USASAV482WWSR',
            key: 'USASAV482WWSR',
            prices: [
              {
                id: '652f7863-1c01-41f9-8ff3-43c404deb133',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 99900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 89910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1oUM83RBDDS4QxUVVxxsq3/31a093e8cb82b4655e6e53ec00537d48/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7h9reCUeSGeZSBRzTS60WA/9a77390e32333ae5071e24ac0c739dba/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7vLVdSiC73ixUbJO3AWsUn/d3c91c6ab27e2119718efb01addd91c9/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6cRPwbiwVfGQvmUS7unj4h/e44bfe1f8f48c66668b2bd579e5bc1d0/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2kl5feRC8mVphcQeNp8lLh/f23de2c6ac95d096ed1cba52af66cbbd/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4xXU7Q4dPz8JZNpqiS3yHr/5e22ca0a42877c6b17e0d84058c2d7d9/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3KepHFnMUColBpZxSyjxPk/91d2ad0b0adcd21c7824d01a7bb4aec5/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6h2LuetqUfjlJG1f9FEVm4/435ff02212c6d40df0ba1a5eb4a8f9ac/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5yPdnTmz6Bsb9x4QvCE07m/6c903a69153f8278fd7815372d984aa2/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Worn White Satin',
                  label: 'Worn White Satin',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USASAV482VCSR',
              key: 'USASAV482VCSR',
              prices: [
                {
                  id: 'f592d47f-48a8-4c65-83d2-d3603efaa877',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7HU4PPamZcYm9G0ERbykvK/deafb063e7aff072d24c681fbbe49b87/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6UhINJT7MQbSCTVKHW6vif/76848fa8fdb97f97b2f0e71b960f34e2/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ZpsD1Qbrp4V5l5kTce0so/7eb7e49c22929e2f2b9262138ee997b2/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NWaFMTsaLtgFaY8flwR2j/f933996ef64676c9d2d5e99cefe895fb/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/34cNGHQZp1izPljemXJVlH/0841d4c14c18f1a62a5094f755fad3d7/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3cscNDphgUOpPuoBcJ6Qvv/1fdf38cdb752ab9954199eed45bf64e8/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5iWITwYAMXfRW6syDFCMC8/f26359dea907da32c503765e5decb72d/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6b72jum5dNHFFK3Rb4fvdr/c6eadee5e6dbd5246f4af5587f1cd6ca/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JVPD0p8PxcapZW5Wu4AnB/22b427748f1b16844fcdd2d5d5d1319a/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Cherry Satin',
                    label: 'Vintage Cherry Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USASAV482ESR',
              key: 'USASAV482ESR',
              prices: [
                {
                  id: 'f63acfa1-170a-461b-94f5-db6cef565956',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28EsOfspfQlapMBeshlEds/27ca11f8894b2719b94d2ef5310d2417/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0sotDKfUUKG12UX38bner4/27adffe62a3293087cc08af9a12d5586/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Gr2iRSp8prvC8QFpwN80z/5b4490855ab014f2472741ce823a71fc/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/08tUKPtqsNxsvcz6HlyKvu/4768c4354a7cc3571ac58048d053a3eb/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0daLToy6glkJ9g5rqy01Cm/ea4757188d2d3989592e695cba6dd7b8/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1LGas34NSFnCm7LpxKvbaF/b6be0cb1888b1c6b04f9ae910f4ff384/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2PyNNcbcoRBonSsErzhFIf/25c37b92e220500518420608397686e9/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4iKZ29VGD6DiTowFApaALc/f1daa4e29c1aee678650d76468345aa7/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5MvCIp64kdq6XXdBlDwwLX/9ad7913636b79a19b8717da692ede886/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: '',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony Satin',
                    label: 'Ebony Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'USASAV482NWSR',
              key: 'USASAV482NWSR',
              prices: [
                {
                  id: '9a54590d-2d9c-43bb-9afb-da41b14d196e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2EySFzd4a9MhSscT4W5l5l/872ba30070e608a9e4ac8e3d4cafa171/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6JR399LkJhOqW8QXBoQmx0/14f8a62348044e97200e104cdde90234/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6cxASobGYRWocvGJVpX6ff/a07c47c4e84cf8a449f452394cb4dee0/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1k5vxXEfLbA2lYr4KDDlDx/38ce5d733354dc02cf98ddec27563fc0/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WOWaW3ZxIU6I9dSZRyXAj/b99644e3bd127cd82d962b64b29d8981/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4l32VNJpjU3azTd0sBDdhc/cf3698fe4c46cbca3a651984ecf7548c/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7zzUi890bq1XGZGCjTht87/def353ded21c78661bb454350b0d8b44/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/12a3TR6IOyDF5Kpd7ENcW9/0d631efd55b02af23ca901fc3d86dac6/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7LRESHvvYogVMNk9zRfrmI/00a944f5047a045b5efeea93f29f5460/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Natural Walnut Satin',
                    label: 'Natural Walnut Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'Les Paul Special Tribute',
          },
          description: {
            'en-US':
              'The all-new Gibson Les Paul Special Tribute offers players a new take on a classic design. The special treatment starts with a mahogany body fitted with 490R and 490T open-coil humbucking pickups for rich, classic Gibson tones. Vintage deluxe white button tuners and a compensated wrap-around tailpiece keep things simple and elegant. Comfort and playability will always be on tap thanks to the Rounded profile maple neck and true rosewood fingerboard. You could say that this one is a sonic special delivery. Available in timeless satin finishes � Worn White, Vintage Cherry, Ebony, and Natural Walnut.',
          },
          categories: [
            {
              typeId: 'category',
              id: '1501cc9d-57ae-4b19-aafe-d68455df9db1',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'les-paul-special-tribute',
          },
          masterVariant: {
            id: 1,
            sku: 'USASAV482WWSR',
            key: 'USASAV482WWSR',
            prices: [
              {
                id: '652f7863-1c01-41f9-8ff3-43c404deb133',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 99900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 89910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1oUM83RBDDS4QxUVVxxsq3/31a093e8cb82b4655e6e53ec00537d48/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7h9reCUeSGeZSBRzTS60WA/9a77390e32333ae5071e24ac0c739dba/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7vLVdSiC73ixUbJO3AWsUn/d3c91c6ab27e2119718efb01addd91c9/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_LPSPTH01WWCH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6cRPwbiwVfGQvmUS7unj4h/e44bfe1f8f48c66668b2bd579e5bc1d0/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2kl5feRC8mVphcQeNp8lLh/f23de2c6ac95d096ed1cba52af66cbbd/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4xXU7Q4dPz8JZNpqiS3yHr/5e22ca0a42877c6b17e0d84058c2d7d9/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3KepHFnMUColBpZxSyjxPk/91d2ad0b0adcd21c7824d01a7bb4aec5/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6h2LuetqUfjlJG1f9FEVm4/435ff02212c6d40df0ba1a5eb4a8f9ac/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5yPdnTmz6Bsb9x4QvCE07m/6c903a69153f8278fd7815372d984aa2/__static.gibson.com_product-images_USA_USASAV482_Worn_White_Satin_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Worn White Satin',
                  label: 'Worn White Satin',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USASAV482VCSR',
              key: 'USASAV482VCSR',
              prices: [
                {
                  id: 'f592d47f-48a8-4c65-83d2-d3603efaa877',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7HU4PPamZcYm9G0ERbykvK/deafb063e7aff072d24c681fbbe49b87/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6UhINJT7MQbSCTVKHW6vif/76848fa8fdb97f97b2f0e71b960f34e2/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ZpsD1Qbrp4V5l5kTce0so/7eb7e49c22929e2f2b9262138ee997b2/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_LPSPTH01AYCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NWaFMTsaLtgFaY8flwR2j/f933996ef64676c9d2d5e99cefe895fb/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/34cNGHQZp1izPljemXJVlH/0841d4c14c18f1a62a5094f755fad3d7/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3cscNDphgUOpPuoBcJ6Qvv/1fdf38cdb752ab9954199eed45bf64e8/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5iWITwYAMXfRW6syDFCMC8/f26359dea907da32c503765e5decb72d/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6b72jum5dNHFFK3Rb4fvdr/c6eadee5e6dbd5246f4af5587f1cd6ca/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JVPD0p8PxcapZW5Wu4AnB/22b427748f1b16844fcdd2d5d5d1319a/__static.gibson.com_product-images_USA_USASAV482_Vintage_Cherry_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Cherry Satin',
                    label: 'Vintage Cherry Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USASAV482ESR',
              key: 'USASAV482ESR',
              prices: [
                {
                  id: 'f63acfa1-170a-461b-94f5-db6cef565956',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28EsOfspfQlapMBeshlEds/27ca11f8894b2719b94d2ef5310d2417/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0sotDKfUUKG12UX38bner4/27adffe62a3293087cc08af9a12d5586/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Gr2iRSp8prvC8QFpwN80z/5b4490855ab014f2472741ce823a71fc/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_LPSPTH01E5CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/08tUKPtqsNxsvcz6HlyKvu/4768c4354a7cc3571ac58048d053a3eb/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0daLToy6glkJ9g5rqy01Cm/ea4757188d2d3989592e695cba6dd7b8/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1LGas34NSFnCm7LpxKvbaF/b6be0cb1888b1c6b04f9ae910f4ff384/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2PyNNcbcoRBonSsErzhFIf/25c37b92e220500518420608397686e9/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4iKZ29VGD6DiTowFApaALc/f1daa4e29c1aee678650d76468345aa7/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5MvCIp64kdq6XXdBlDwwLX/9ad7913636b79a19b8717da692ede886/__static.gibson.com_product-images_USA_USASAV482_Ebony_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: '',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony Satin',
                    label: 'Ebony Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'USASAV482NWSR',
              key: 'USASAV482NWSR',
              prices: [
                {
                  id: '9a54590d-2d9c-43bb-9afb-da41b14d196e',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 99900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 89910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2EySFzd4a9MhSscT4W5l5l/872ba30070e608a9e4ac8e3d4cafa171/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6JR399LkJhOqW8QXBoQmx0/14f8a62348044e97200e104cdde90234/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6cxASobGYRWocvGJVpX6ff/a07c47c4e84cf8a449f452394cb4dee0/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_LPSPTH015NCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1k5vxXEfLbA2lYr4KDDlDx/38ce5d733354dc02cf98ddec27563fc0/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WOWaW3ZxIU6I9dSZRyXAj/b99644e3bd127cd82d962b64b29d8981/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4l32VNJpjU3azTd0sBDdhc/cf3698fe4c46cbca3a651984ecf7548c/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7zzUi890bq1XGZGCjTht87/def353ded21c78661bb454350b0d8b44/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/12a3TR6IOyDF5Kpd7ENcW9/0d631efd55b02af23ca901fc3d86dac6/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7LRESHvvYogVMNk9zRfrmI/00a944f5047a045b5efeea93f29f5460/__static.gibson.com_product-images_USA_USASAV482_Natural_Walnut_Satin_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Natural Walnut Satin',
                    label: 'Natural Walnut Satin',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'les-paul-special-tribute',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: '7bdb72bd-98dc-4e36-a585-9b3a0662a499',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:33.089Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:36.440Z',
      lastModifiedAt: '2023-08-29T11:46:33.089Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'SG Modern',
          },
          description: {
            'en-US':
              'The newly refreshed Gibson SG Modern incorporates many contemporary updates that players have embraced, and it�s much more than a classic �solid guitar;� it�s a hybrid between an SG� and a Les Paul�. Shaped and scarfed like a classic SG, the body is crafted with a AA maple top and mahogany back, characteristic of a Les Paul. This combination is renowned for its resonance and sustain. The genuine ebony, 24-fret compound radius fingerboard and asymmetrical, SlimTaper� neck allow fast and silky access to the highest frets. A pair of calibrated Burstbucker� Pro Alnico 5 humbuckers deliver firepower, and the push-pull controls allow you to switch between the Gibson humbucker and the single coil P-90 sounds, both of which have defined so many genres of music across multiple generations since we invented them. Upscale appointments include genuine mother-of-pearl inlays, Grover� Rotomatic� tuners, and clear Top Hat knobs.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'sg-modern',
          },
          masterVariant: {
            id: 1,
            sku: 'USAQHL543BFR',
            key: 'USAQHL543BFR',
            prices: [
              {
                id: '2595a773-d5f1-4529-8c84-a068d07083a0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4G6kki7Jn5fsTOs1pPHDOm/95c12051f823a00c03f7e4c5085eb8b7/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6QuQYd4OpgnbC4EKBVgyZ9/206f56a8fdaaf76fceac65565d1bb333/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/186QCC4HjWxDOO8mczmSX4/6bca17de3030537363a986aafaafb384/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sk9xF3GAlr5LHZbsGDbLF/b52f663290aa88b803c1cab5e52bb742/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3FT9qfXlVmL2zOfzwA4B3x/5b9ad27a8c9e29c2397667a75f09c57f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5iqdkwbjlJWLuqalgDkWzM/8ce23f7de3951e8ed439961904d63d1f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0uQH0fDR5mxAnsaglvbWmY/34f0a180ee2b11cb2243caf8144f37ad/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/61FggpbNpwnjuQ3mqr7GyR/2055130e643c8a8039e67a471dbe4fac/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/64Pc9nwzY7Uur8c4BQ2IUU/d2ecabd548436214bdb66fb3e56de455/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Blueberry Fade',
                  label: 'Blueberry Fade',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USAQHL543BFL',
              key: 'USAQHL543BFL',
              prices: [
                {
                  id: 'b426eb9f-6fc5-4f3b-983e-38118abbb4b6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4G6kki7Jn5fsTOs1pPHDOm/95c12051f823a00c03f7e4c5085eb8b7/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6QuQYd4OpgnbC4EKBVgyZ9/206f56a8fdaaf76fceac65565d1bb333/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/186QCC4HjWxDOO8mczmSX4/6bca17de3030537363a986aafaafb384/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sk9xF3GAlr5LHZbsGDbLF/b52f663290aa88b803c1cab5e52bb742/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3FT9qfXlVmL2zOfzwA4B3x/5b9ad27a8c9e29c2397667a75f09c57f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5iqdkwbjlJWLuqalgDkWzM/8ce23f7de3951e8ed439961904d63d1f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0uQH0fDR5mxAnsaglvbWmY/34f0a180ee2b11cb2243caf8144f37ad/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/61FggpbNpwnjuQ3mqr7GyR/2055130e643c8a8039e67a471dbe4fac/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/64Pc9nwzY7Uur8c4BQ2IUU/d2ecabd548436214bdb66fb3e56de455/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Blueberry Fade',
                    label: 'Blueberry Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USAQHL543TBFR',
              key: 'USAQHL543TBFR',
              prices: [
                {
                  id: 'd863eeb1-01c3-45fb-abf0-2f24a6b89527',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/32XJiYBi2GNqE4MKVGjJ1G/451e45af4f2181c334c78109e8437c63/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zoiqDiEnqynBnR4h7zAUo/5ffec7a1829efea0b46f58985cd0e8a8/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PFXTjMO4bkOg0sX0f4AvP/9a30cfec66f178914f1ff3385d8d809c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3wXSyJHgnnbP82JVvaIUe7/960a94ad6de8f59dddd5a13411c2e92f/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cXIrO6lpoRa36OxdGQ0ZN/c3830ac9ae274c85cacc6f910ac90c31/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2awPjpnnO4wN6GZrFLDCR8/7a4b5576abc043b4a3e93f0472200206/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0LneIMUFc1JVbZIYo4OurO/83ecaf321d8d1c16e11aac3398f91327/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NPBCD4sjT1CcC9cgie8uI/e646cac0c2cdcc575bb5400dd148477c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ECX83POKPVbwAZGso2Q1i/f2471b010aa3482611bdb8ad2331f229/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Trans Black Fade',
                    label: 'Trans Black Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'USAQHL543TBFL',
              key: 'USAQHL543TBFL',
              prices: [
                {
                  id: 'ef335a1d-0377-4629-8ed1-536fbf3f8bdb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/32XJiYBi2GNqE4MKVGjJ1G/451e45af4f2181c334c78109e8437c63/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zoiqDiEnqynBnR4h7zAUo/5ffec7a1829efea0b46f58985cd0e8a8/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PFXTjMO4bkOg0sX0f4AvP/9a30cfec66f178914f1ff3385d8d809c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3wXSyJHgnnbP82JVvaIUe7/960a94ad6de8f59dddd5a13411c2e92f/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cXIrO6lpoRa36OxdGQ0ZN/c3830ac9ae274c85cacc6f910ac90c31/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2awPjpnnO4wN6GZrFLDCR8/7a4b5576abc043b4a3e93f0472200206/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0LneIMUFc1JVbZIYo4OurO/83ecaf321d8d1c16e11aac3398f91327/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NPBCD4sjT1CcC9cgie8uI/e646cac0c2cdcc575bb5400dd148477c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ECX83POKPVbwAZGso2Q1i/f2471b010aa3482611bdb8ad2331f229/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Trans Black Fade',
                    label: 'Trans Black Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'SG Modern',
          },
          description: {
            'en-US':
              'The newly refreshed Gibson SG Modern incorporates many contemporary updates that players have embraced, and it�s much more than a classic �solid guitar;� it�s a hybrid between an SG� and a Les Paul�. Shaped and scarfed like a classic SG, the body is crafted with a AA maple top and mahogany back, characteristic of a Les Paul. This combination is renowned for its resonance and sustain. The genuine ebony, 24-fret compound radius fingerboard and asymmetrical, SlimTaper� neck allow fast and silky access to the highest frets. A pair of calibrated Burstbucker� Pro Alnico 5 humbuckers deliver firepower, and the push-pull controls allow you to switch between the Gibson humbucker and the single coil P-90 sounds, both of which have defined so many genres of music across multiple generations since we invented them. Upscale appointments include genuine mother-of-pearl inlays, Grover� Rotomatic� tuners, and clear Top Hat knobs.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'sg-modern',
          },
          masterVariant: {
            id: 1,
            sku: 'USAQHL543BFR',
            key: 'USAQHL543BFR',
            prices: [
              {
                id: '2595a773-d5f1-4529-8c84-a068d07083a0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4G6kki7Jn5fsTOs1pPHDOm/95c12051f823a00c03f7e4c5085eb8b7/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6QuQYd4OpgnbC4EKBVgyZ9/206f56a8fdaaf76fceac65565d1bb333/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/186QCC4HjWxDOO8mczmSX4/6bca17de3030537363a986aafaafb384/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sk9xF3GAlr5LHZbsGDbLF/b52f663290aa88b803c1cab5e52bb742/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3FT9qfXlVmL2zOfzwA4B3x/5b9ad27a8c9e29c2397667a75f09c57f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5iqdkwbjlJWLuqalgDkWzM/8ce23f7de3951e8ed439961904d63d1f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0uQH0fDR5mxAnsaglvbWmY/34f0a180ee2b11cb2243caf8144f37ad/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/61FggpbNpwnjuQ3mqr7GyR/2055130e643c8a8039e67a471dbe4fac/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/64Pc9nwzY7Uur8c4BQ2IUU/d2ecabd548436214bdb66fb3e56de455/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Blueberry Fade',
                  label: 'Blueberry Fade',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USAQHL543BFL',
              key: 'USAQHL543BFL',
              prices: [
                {
                  id: 'b426eb9f-6fc5-4f3b-983e-38118abbb4b6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4G6kki7Jn5fsTOs1pPHDOm/95c12051f823a00c03f7e4c5085eb8b7/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6QuQYd4OpgnbC4EKBVgyZ9/206f56a8fdaaf76fceac65565d1bb333/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/186QCC4HjWxDOO8mczmSX4/6bca17de3030537363a986aafaafb384/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_SGM01U8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4Sk9xF3GAlr5LHZbsGDbLF/b52f663290aa88b803c1cab5e52bb742/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3FT9qfXlVmL2zOfzwA4B3x/5b9ad27a8c9e29c2397667a75f09c57f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5iqdkwbjlJWLuqalgDkWzM/8ce23f7de3951e8ed439961904d63d1f/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0uQH0fDR5mxAnsaglvbWmY/34f0a180ee2b11cb2243caf8144f37ad/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/61FggpbNpwnjuQ3mqr7GyR/2055130e643c8a8039e67a471dbe4fac/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/64Pc9nwzY7Uur8c4BQ2IUU/d2ecabd548436214bdb66fb3e56de455/__static.gibson.com_product-images_USA_USAQHL543_Blueberry_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Blueberry Fade',
                    label: 'Blueberry Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'USAQHL543TBFR',
              key: 'USAQHL543TBFR',
              prices: [
                {
                  id: 'd863eeb1-01c3-45fb-abf0-2f24a6b89527',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/32XJiYBi2GNqE4MKVGjJ1G/451e45af4f2181c334c78109e8437c63/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zoiqDiEnqynBnR4h7zAUo/5ffec7a1829efea0b46f58985cd0e8a8/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PFXTjMO4bkOg0sX0f4AvP/9a30cfec66f178914f1ff3385d8d809c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3wXSyJHgnnbP82JVvaIUe7/960a94ad6de8f59dddd5a13411c2e92f/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cXIrO6lpoRa36OxdGQ0ZN/c3830ac9ae274c85cacc6f910ac90c31/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2awPjpnnO4wN6GZrFLDCR8/7a4b5576abc043b4a3e93f0472200206/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0LneIMUFc1JVbZIYo4OurO/83ecaf321d8d1c16e11aac3398f91327/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NPBCD4sjT1CcC9cgie8uI/e646cac0c2cdcc575bb5400dd148477c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ECX83POKPVbwAZGso2Q1i/f2471b010aa3482611bdb8ad2331f229/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Trans Black Fade',
                    label: 'Trans Black Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'USAQHL543TBFL',
              key: 'USAQHL543TBFL',
              prices: [
                {
                  id: 'ef335a1d-0377-4629-8ed1-536fbf3f8bdb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/32XJiYBi2GNqE4MKVGjJ1G/451e45af4f2181c334c78109e8437c63/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4zoiqDiEnqynBnR4h7zAUo/5ffec7a1829efea0b46f58985cd0e8a8/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PFXTjMO4bkOg0sX0f4AvP/9a30cfec66f178914f1ff3385d8d809c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_SGM01E8CH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3wXSyJHgnnbP82JVvaIUe7/960a94ad6de8f59dddd5a13411c2e92f/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1cXIrO6lpoRa36OxdGQ0ZN/c3830ac9ae274c85cacc6f910ac90c31/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2awPjpnnO4wN6GZrFLDCR8/7a4b5576abc043b4a3e93f0472200206/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0LneIMUFc1JVbZIYo4OurO/83ecaf321d8d1c16e11aac3398f91327/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NPBCD4sjT1CcC9cgie8uI/e646cac0c2cdcc575bb5400dd148477c/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2ECX83POKPVbwAZGso2Q1i/f2471b010aa3482611bdb8ad2331f229/__static.gibson.com_product-images_USA_USAQHL543_Trans_Black_Fade_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Trans Black Fade',
                    label: 'Trans Black Fade',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'sg-modern',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: 'eae7b4ff-4e09-4aa7-b797-eb09cb3f7332',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:45.015Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:36.520Z',
      lastModifiedAt: '2023-08-29T11:46:45.015Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Kirk Douglas Signature SG',
          },
          description: {
            'en-US':
              'As the guitarist with The Roots, the beloved house band for Late Night with Jimmy Fallon on NBC, "Captain" Kirk Douglas has developed a well-earned reputation as a stellar player. His guitar collection includes several Gibson models, but arguably the sexiest is his three-pickup Gibson� SG� Custom, which is now commemorated in the new Kirk Douglas signature SG from Gibson USA. Featuring non-locking Keystone tuners, a mahogany neck and body, rosewood fretboard with 22 medium jumbo frets and large block acrylic inlays, a Graph Tech� nut, ABR-1 Tune-O-Matic� bridge and Kirk Douglas signature "Captain" Lyre Tail Vibrola tailpiece, black Top Hat knobs with metal inserts, and three BurstBucker� humbucking pickups.  \n\nLike the Captain himself, the pickups and controls on his SG are incredibly versatile. \n \nOn a basic level, they operate somewhat similarly to a two-pickup SG, but with significant added capabilities. The three-way toggle switch selects the bridge pickup, neck pickup, or both. Each of these pickups has its own volume control, and each is equipped with a push/pull pot that switches the pickup from humbucker to single coil when the switch is pulled out.  \n\nA single master tone knob, located in the usual lead tone control position, is provided, and where you�d normally expect to find the second tone control, an additional volume control (again, with a push/pull switch for coil splitting) is installed. This controls the middle pickup, and can be used to blend its signal in with the other (one or two) pickups, regardless of how the three-way pickup selector switch is positioned. This means you can run the neck and/or bridge pickups alone or together, the neck and middle, bridge and middle, or all three pickups simultaneously, and at any relative volume amounts desired. And even better - once you have dialed up the exact balance you want, you can adjust the overall output level of the entire guitar with the pickguard-mounted master volume control. ',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'kirk-douglas-signature-sg',
          },
          masterVariant: {
            id: 1,
            sku: 'USA19H701IGR',
            key: 'USA19H701IGR',
            prices: [
              {
                id: '461cf27c-3570-4820-b740-f659b267667e',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2TDt0Iexv6nRunoasGDGRq/3c3efee1be188b173d135b950f059e14/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5FFiBio6C8pxmKWzz6tBO4/ac0def3d3b08e1f4e9bf65a4867573b1/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4sgUsvyOpZAV84nwxqk3gN/5dcfbf9d770559f255f4f42a270e7410/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1w0bLUhi5ZH8CZTeG8z6Tc/d00345b1044d548bec03818cae7cccfc/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/44z5rqrjVOBJ2ccotkXsNa/3c29bcf6b9c71ea18c1f60e851cf3e44/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1j9sfeTNeiqJfUrDVINUpi/ce9fb2ad50a18a7b9988db6eaf60bfe2/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6j3BLfoJyOggbXGoW0AMka/0ada4d08a6ca5978be4cc8651c16ca51/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Ig1p3C6etuc6QJoaPkkkC/780907e1f6cf67ef4b4d708f1f921b4a/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1rr3z8C5bJOG0MBBMtqO7A/340f3a58326d4daff4f322b2910aa1a1/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USA19H701ER',
              key: 'USA19H701ER',
              prices: [
                {
                  id: '92418c93-032f-4677-9fea-7be78d683e1f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7Ef2WgwJsZCfugP5odqutK/755a9559e7b89592bffaf33423faec80/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4BgRRUmMSSTKSWohbdHddK/fa18d72db28bb1c46169052a3dab4f39/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/09eokITBKTAf3DvZiRhPV1/b6875337a4a79d9702317b736715a6bb/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3BwbqZV0MYkqS7tQpn6NBE/eb556f5782179779efc6a778af164041/__static.gibson.com_product-images_USA_USA19H701_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JhHa9HhMnPFJxWmyWzTPf/4eb2d249fb9127b20a1dc57ad9963021/__static.gibson.com_product-images_USA_USA19H701_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2k7b89QwIRUV38fFOV4TgK/b3b45df8b7e24ef4dbce1f9d0b0c1f31/__static.gibson.com_product-images_USA_USA19H701_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7GFrv8lmmpvTUYfLj93XIQ/8e49000f85c234d3539dedc9840cbb74/__static.gibson.com_product-images_USA_USA19H701_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6ieEEif2hP4MMW6VIpD2jH/5ba3f4e19153ae7ed84ccd4d61a914d0/__static.gibson.com_product-images_USA_USA19H701_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mY20oH336vqV16iWkOK8W/3977cd493cf9574947b3e91a5b539f24/__static.gibson.com_product-images_USA_USA19H701_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'Kirk Douglas Signature SG',
          },
          description: {
            'en-US':
              'As the guitarist with The Roots, the beloved house band for Late Night with Jimmy Fallon on NBC, "Captain" Kirk Douglas has developed a well-earned reputation as a stellar player. His guitar collection includes several Gibson models, but arguably the sexiest is his three-pickup Gibson� SG� Custom, which is now commemorated in the new Kirk Douglas signature SG from Gibson USA. Featuring non-locking Keystone tuners, a mahogany neck and body, rosewood fretboard with 22 medium jumbo frets and large block acrylic inlays, a Graph Tech� nut, ABR-1 Tune-O-Matic� bridge and Kirk Douglas signature "Captain" Lyre Tail Vibrola tailpiece, black Top Hat knobs with metal inserts, and three BurstBucker� humbucking pickups.  \n\nLike the Captain himself, the pickups and controls on his SG are incredibly versatile. \n \nOn a basic level, they operate somewhat similarly to a two-pickup SG, but with significant added capabilities. The three-way toggle switch selects the bridge pickup, neck pickup, or both. Each of these pickups has its own volume control, and each is equipped with a push/pull pot that switches the pickup from humbucker to single coil when the switch is pulled out.  \n\nA single master tone knob, located in the usual lead tone control position, is provided, and where you�d normally expect to find the second tone control, an additional volume control (again, with a push/pull switch for coil splitting) is installed. This controls the middle pickup, and can be used to blend its signal in with the other (one or two) pickups, regardless of how the three-way pickup selector switch is positioned. This means you can run the neck and/or bridge pickups alone or together, the neck and middle, bridge and middle, or all three pickups simultaneously, and at any relative volume amounts desired. And even better - once you have dialed up the exact balance you want, you can adjust the overall output level of the entire guitar with the pickguard-mounted master volume control. ',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'kirk-douglas-signature-sg',
          },
          masterVariant: {
            id: 1,
            sku: 'USA19H701IGR',
            key: 'USA19H701IGR',
            prices: [
              {
                id: '461cf27c-3570-4820-b740-f659b267667e',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2TDt0Iexv6nRunoasGDGRq/3c3efee1be188b173d135b950f059e14/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5FFiBio6C8pxmKWzz6tBO4/ac0def3d3b08e1f4e9bf65a4867573b1/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4sgUsvyOpZAV84nwxqk3gN/5dcfbf9d770559f255f4f42a270e7410/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_SGKD20IGNH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1w0bLUhi5ZH8CZTeG8z6Tc/d00345b1044d548bec03818cae7cccfc/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/44z5rqrjVOBJ2ccotkXsNa/3c29bcf6b9c71ea18c1f60e851cf3e44/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1j9sfeTNeiqJfUrDVINUpi/ce9fb2ad50a18a7b9988db6eaf60bfe2/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6j3BLfoJyOggbXGoW0AMka/0ada4d08a6ca5978be4cc8651c16ca51/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Ig1p3C6etuc6QJoaPkkkC/780907e1f6cf67ef4b4d708f1f921b4a/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1rr3z8C5bJOG0MBBMtqO7A/340f3a58326d4daff4f322b2910aa1a1/__static.gibson.com_product-images_USA_USA19H701_Inverness_Green_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USA19H701ER',
              key: 'USA19H701ER',
              prices: [
                {
                  id: '92418c93-032f-4677-9fea-7be78d683e1f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7Ef2WgwJsZCfugP5odqutK/755a9559e7b89592bffaf33423faec80/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4BgRRUmMSSTKSWohbdHddK/fa18d72db28bb1c46169052a3dab4f39/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/09eokITBKTAf3DvZiRhPV1/b6875337a4a79d9702317b736715a6bb/__static.gibson.com_product-images_USA_USA19H701_Ebony_SGKD20EBGH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3BwbqZV0MYkqS7tQpn6NBE/eb556f5782179779efc6a778af164041/__static.gibson.com_product-images_USA_USA19H701_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JhHa9HhMnPFJxWmyWzTPf/4eb2d249fb9127b20a1dc57ad9963021/__static.gibson.com_product-images_USA_USA19H701_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2k7b89QwIRUV38fFOV4TgK/b3b45df8b7e24ef4dbce1f9d0b0c1f31/__static.gibson.com_product-images_USA_USA19H701_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7GFrv8lmmpvTUYfLj93XIQ/8e49000f85c234d3539dedc9840cbb74/__static.gibson.com_product-images_USA_USA19H701_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6ieEEif2hP4MMW6VIpD2jH/5ba3f4e19153ae7ed84ccd4d61a914d0/__static.gibson.com_product-images_USA_USA19H701_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5mY20oH336vqV16iWkOK8W/3977cd493cf9574947b3e91a5b539f24/__static.gibson.com_product-images_USA_USA19H701_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'kirk-douglas-signature-sg',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 2,
    },
    {
      id: '6e6af5c8-7f0f-47ce-99cb-149bcd54125e',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:42.027Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:36.532Z',
      lastModifiedAt: '2023-08-29T11:46:42.027Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'SG Special',
          },
          description: {
            'en-US':
              'The SG� Special returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. This early 60s style SG Special has the vibe and sound heard on countless classic rock recordings. The comfortable, SlimTaper� mahogany neck and bound rosewood fingerboard are well known for fast, effortless playing. The two P-90 pickups are noted for their fat snarl when driven and their smooth sweetness when played clean. The SG Special is equipped with the 3-way toggle switch and has hand-wired controls with Orange Drop� capacitors. A hardshell case is included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'sg-special',
          },
          masterVariant: {
            id: 1,
            sku: 'SGSP00EBCH1ER',
            key: 'SGSP00EBCH1ER',
            prices: [
              {
                id: 'bbeed80b-48eb-4272-acfe-e8c3815f3c8a',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 159900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 143910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/QTBJgyljrfxbfN2a91qtR/2282a6d6b00f983b8d78326ca6ed8acb/SGSP00EBCH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/79NGHlspL3gg9X2K5ze9a3/ab967e7b95928eabca8b178a1861e729/SGSP00EBCH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5TKySUI5mPOR8zPApak8eY/0a0be80a190f255ea883af4f90848e34/SGSP00EBCH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7wOwXBXE3mdQKoM8kGcxNq/c36a8657d9709f5eaf5b2800affa8770/SGSP00EBCH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://downloads.ctfassets.net/m8onsx4mm13s/1DkCLKr6IJZESTrG6r1Jt9/0fe86b58742289d122fca692712babd2/SGSP00EBCH1_pups.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://downloads.ctfassets.net/m8onsx4mm13s/6cVY8udVUbus7idwITTfKH/80704a208dba224b7c301784665c0162/SGSP00EBCH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7sUs29CiY3fTgnHN0cTodh/5adcb5ba8b0a183f18de4dfc95a4d351/SGSP00EBCH1_headstock.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Bz9tQkRaZX1qFViwcB0Gj/5fb7d4a5ad198388d9010b312730de63/SGSP00EBCH1_headstock_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'SGSP00VECH1VCR',
              key: 'SGSP00VECH1VCR',
              prices: [
                {
                  id: '3bd60808-fc3d-40de-a54c-9dbf42b7aecf',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 159900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 143910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2LyRIP2MS6LNP1VmpELEC6/f7e1a66b1c7e737689e20104b6ea37ae/SGSP00VECH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/95kGMuKYarkGjlyoifTpQ/8be8eb69c833e4d9d7f3cf05599fd6f6/SGSP00VECH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5powSH8O9Ss0QN55E7JQNG/51a0d6acc62519f3d8f591825d394482/SGSP00VECH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3RBuBXaK3DT6XJfHQO9Fdx/51d25986fa59600a9c02d1b041260beb/SGSP00VECH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://downloads.ctfassets.net/m8onsx4mm13s/5zcSaqfXBGfoHRcoZtAQa8/07698c59e56484bab877d08cb46a3dbe/SGSP00VECH1_pups.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://downloads.ctfassets.net/m8onsx4mm13s/4fS5FdaMsYedS44UH9ii4f/4d48a247cbe6546c52cb4cd3d5136925/SGSP00VECH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1gfedro1NiOOXAtZkHd2OI/b56e6baac3bc1cc3e5d8cf32a9929c42/SGSP00VECH1_headstock.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5BMneChEUO9IpNAwIruNFx/d344d0fb568d9fa8dd2534decdd220a9/SGSP00VECH1_headstock_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Cherry',
                    label: 'Vintage Cherry',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'SG Special',
          },
          description: {
            'en-US':
              'The SG� Special returns to the classic design that made it relevant, played, and loved -- shaping sound across generations and genres of music. This early 60s style SG Special has the vibe and sound heard on countless classic rock recordings. The comfortable, SlimTaper� mahogany neck and bound rosewood fingerboard are well known for fast, effortless playing. The two P-90 pickups are noted for their fat snarl when driven and their smooth sweetness when played clean. The SG Special is equipped with the 3-way toggle switch and has hand-wired controls with Orange Drop� capacitors. A hardshell case is included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'sg-special',
          },
          masterVariant: {
            id: 1,
            sku: 'SGSP00EBCH1ER',
            key: 'SGSP00EBCH1ER',
            prices: [
              {
                id: 'bbeed80b-48eb-4272-acfe-e8c3815f3c8a',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 159900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 143910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/QTBJgyljrfxbfN2a91qtR/2282a6d6b00f983b8d78326ca6ed8acb/SGSP00EBCH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/79NGHlspL3gg9X2K5ze9a3/ab967e7b95928eabca8b178a1861e729/SGSP00EBCH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5TKySUI5mPOR8zPApak8eY/0a0be80a190f255ea883af4f90848e34/SGSP00EBCH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7wOwXBXE3mdQKoM8kGcxNq/c36a8657d9709f5eaf5b2800affa8770/SGSP00EBCH1_body.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://downloads.ctfassets.net/m8onsx4mm13s/1DkCLKr6IJZESTrG6r1Jt9/0fe86b58742289d122fca692712babd2/SGSP00EBCH1_pups.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://downloads.ctfassets.net/m8onsx4mm13s/6cVY8udVUbus7idwITTfKH/80704a208dba224b7c301784665c0162/SGSP00EBCH1_knobs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7sUs29CiY3fTgnHN0cTodh/5adcb5ba8b0a183f18de4dfc95a4d351/SGSP00EBCH1_headstock.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Bz9tQkRaZX1qFViwcB0Gj/5fb7d4a5ad198388d9010b312730de63/SGSP00EBCH1_headstock_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'SGSP00VECH1VCR',
              key: 'SGSP00VECH1VCR',
              prices: [
                {
                  id: '3bd60808-fc3d-40de-a54c-9dbf42b7aecf',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 159900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 143910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2LyRIP2MS6LNP1VmpELEC6/f7e1a66b1c7e737689e20104b6ea37ae/SGSP00VECH1_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/95kGMuKYarkGjlyoifTpQ/8be8eb69c833e4d9d7f3cf05599fd6f6/SGSP00VECH1_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5powSH8O9Ss0QN55E7JQNG/51a0d6acc62519f3d8f591825d394482/SGSP00VECH1_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3RBuBXaK3DT6XJfHQO9Fdx/51d25986fa59600a9c02d1b041260beb/SGSP00VECH1_body.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://downloads.ctfassets.net/m8onsx4mm13s/5zcSaqfXBGfoHRcoZtAQa8/07698c59e56484bab877d08cb46a3dbe/SGSP00VECH1_pups.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://downloads.ctfassets.net/m8onsx4mm13s/4fS5FdaMsYedS44UH9ii4f/4d48a247cbe6546c52cb4cd3d5136925/SGSP00VECH1_knobs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1gfedro1NiOOXAtZkHd2OI/b56e6baac3bc1cc3e5d8cf32a9929c42/SGSP00VECH1_headstock.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5BMneChEUO9IpNAwIruNFx/d344d0fb568d9fa8dd2534decdd220a9/SGSP00VECH1_headstock_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Cherry',
                    label: 'Vintage Cherry',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'sg-special',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 2,
    },
    {
      id: '46fb03a3-f0e2-415b-b8d7-a1ea0131a6cc',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:49.115Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:27:36.487Z',
      lastModifiedAt: '2023-08-29T11:46:49.115Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Jimi Hendrix 1967 SG Custom',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'jimi-hendrix-1967-sg-custom',
          },
          masterVariant: {
            id: 1,
            sku: 'CUSFHH685APWR',
            key: 'CUSFHH685APWR',
            prices: [
              {
                id: '7436babf-5b27-437d-b5e4-bbd2523c9b39',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 999900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 899910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Lmt7rcMRIi7HA8imLhUWk/bc93c86b474cbd4f3edb3c1d9d86e5f7/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4GpGY6qXgw973nOcxwA9q8/7d3ddbca4ecc595a6cd9147a52901f1f/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3wAZuRDKf1PqfW8Yd27Cc2/e2ac905f9d0ab806ad856608a5965272/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6RNTFOvop5iVcyDrBqEwte/96c76af3d37c0fe74da9168d0a314959/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7kF14DcTN0Lwy3dCEFwzMa/46e4dc00d4d03dd00b8212860ddb4554/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7j2bCILJjsDwECkhUDppkZ/d095bd0db315c314b9901df3eb9152c7/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZKEQfUFgP1Ht7MC6pLQX6/4665ae1c92c63edf6f5141fd672945c1/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7lRHL6OLS3OjPNs1QzcNV0/92bd06d9515fd9c8a2e1f9ec5e826868/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1x4d7dSDqF0sbn4DBaCVHd/e55abd9c43fb4e823c6a8a349104501a/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Aged Polaris White',
                  label: 'Aged Polaris White',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US': 'Jimi Hendrix 1967 SG Custom',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd80dd28f-34fd-4705-86ee-7307aff49d82',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'jimi-hendrix-1967-sg-custom',
          },
          masterVariant: {
            id: 1,
            sku: 'CUSFHH685APWR',
            key: 'CUSFHH685APWR',
            prices: [
              {
                id: '7436babf-5b27-437d-b5e4-bbd2523c9b39',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 999900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 899910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Lmt7rcMRIi7HA8imLhUWk/bc93c86b474cbd4f3edb3c1d9d86e5f7/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4GpGY6qXgw973nOcxwA9q8/7d3ddbca4ecc595a6cd9147a52901f1f/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3wAZuRDKf1PqfW8Yd27Cc2/e2ac905f9d0ab806ad856608a5965272/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_SGC67JHACWGM1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6RNTFOvop5iVcyDrBqEwte/96c76af3d37c0fe74da9168d0a314959/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7kF14DcTN0Lwy3dCEFwzMa/46e4dc00d4d03dd00b8212860ddb4554/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7j2bCILJjsDwECkhUDppkZ/d095bd0db315c314b9901df3eb9152c7/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZKEQfUFgP1Ht7MC6pLQX6/4665ae1c92c63edf6f5141fd672945c1/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7lRHL6OLS3OjPNs1QzcNV0/92bd06d9515fd9c8a2e1f9ec5e826868/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1x4d7dSDqF0sbn4DBaCVHd/e55abd9c43fb4e823c6a8a349104501a/__static.gibson.com_product-images_Custom_CUSFHH685_Aged_Polaris_White_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Aged Polaris White',
                  label: 'Aged Polaris White',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: 'jimi-hendrix-1967-sg-custom',
      lastVariantId: 1,
    },
    {
      id: '938f0a19-9b3a-4b08-8efc-bb8dd1bcd5e9',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:35.618Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:44:56.419Z',
      lastModifiedAt: '2023-08-29T11:46:35.618Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'L-00 Studio Walnut',
          },
          description: {
            'en-US':
              'The new L-00 Studio offers one of our most famous icon guitars built with walnut back and sides. Available in both Antique Natural and our hand sprayed Walnut Burst finish. Finished with an active under-saddle piezo pickup for easy studio quality plug and play anywhere!',
          },
          categories: [
            {
              typeId: 'category',
              id: '303d6c9f-4add-4217-8a34-144187ff3696',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'l-00-studio-walnut',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCX5Q355ANR',
            key: 'ACCX5Q355ANR',
            prices: [
              {
                id: '78a8dd37-0bfb-4e86-8394-5b1f94cc2afb',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 184900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 166410,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3EoPIRIYwvRSmUph86lJuB/09f36c6a063f4a9d0cb579ce4e974345/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/39AiwAfXKoLBISPLU2JhrR/c93e462b43ea75b1fd598b23c5be3fba/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7JNohLyREcbvtXgRQWumfQ/d8f8c3b71d23078167d39ef63c38e4d2/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2c6RIhemEABPDHwcweFis6/93d58963b7c0f7962401da554886d3fc/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Kw2MQDDFn1SqJdZGxy3bi/a62509359f869ef9b09c06a7155753e0/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Na770U937NC9CyxJ6ko9M/ebce14290e41967ca975564b3a53c7fd/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/11kUNn09hrNyQvl1qgtQX0/ac86d91782d36e09a5bd3e2e95eff741/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZPW3pnONtTFwkKc5eKlaQ/a66d4b09e79b0e76ec592c2e96545d53/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5IAXzQU2bdrXGj8x6neYhO/044f072d71ff83486af1c147953a4698/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Antique Natural',
                  label: 'Antique Natural',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCX5Q355ANL',
              key: 'ACCX5Q355ANL',
              prices: [
                {
                  id: 'a3b9213a-4efa-4e0d-bc76-bcc4fcd89045',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3EoPIRIYwvRSmUph86lJuB/09f36c6a063f4a9d0cb579ce4e974345/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/39AiwAfXKoLBISPLU2JhrR/c93e462b43ea75b1fd598b23c5be3fba/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JNohLyREcbvtXgRQWumfQ/d8f8c3b71d23078167d39ef63c38e4d2/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2c6RIhemEABPDHwcweFis6/93d58963b7c0f7962401da554886d3fc/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Kw2MQDDFn1SqJdZGxy3bi/a62509359f869ef9b09c06a7155753e0/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Na770U937NC9CyxJ6ko9M/ebce14290e41967ca975564b3a53c7fd/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/11kUNn09hrNyQvl1qgtQX0/ac86d91782d36e09a5bd3e2e95eff741/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZPW3pnONtTFwkKc5eKlaQ/a66d4b09e79b0e76ec592c2e96545d53/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5IAXzQU2bdrXGj8x6neYhO/044f072d71ff83486af1c147953a4698/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Antique Natural',
                    label: 'Antique Natural',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCX5Q355WBR',
              key: 'ACCX5Q355WBR',
              prices: [
                {
                  id: '29d843fb-7af1-4190-9415-1144c685bf5f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5yNkw1gggYJjbacfu3ZxGj/8814f2195104d30f2dc5e19f7d87a19d/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KzdYovlIKRNqf76iaLyur/bac2d1434833aced8f438c2e68f95271/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TV1DUdomqJqHV1d9hI5u8/721579c6830e5745b210effcb9102cdb/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bV1A1KVaajBq1Dab2I63I/3ab42d10d3eeb91c530df5523e5b99ea/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3KjdkGvLKPOcUPdncZLgBL/ad647662227b1bbb8f3a0f33bb94a0ff/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/241sppYlXnHm6GFUJso5Fg/23d9634d96324b91ba8e67c08842e68b/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/75Y48ycVjmVd4Md0jdFK1h/ec1c1526a4ab93297e14d9b715c43778/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uU8SKVz3c9LJq9J2QPXUx/c6db94d1b9633826ea9f6098f7e88009/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0t8WeFb2mOplpmP4tBihng/b06c844a382c40efcb53a3373379ee6f/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Walnut Burst',
                    label: 'Walnut Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCX5Q355WBL',
              key: 'ACCX5Q355WBL',
              prices: [
                {
                  id: '655922c3-2602-46aa-8fc3-c00b763f6280',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5yNkw1gggYJjbacfu3ZxGj/8814f2195104d30f2dc5e19f7d87a19d/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KzdYovlIKRNqf76iaLyur/bac2d1434833aced8f438c2e68f95271/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TV1DUdomqJqHV1d9hI5u8/721579c6830e5745b210effcb9102cdb/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bV1A1KVaajBq1Dab2I63I/3ab42d10d3eeb91c530df5523e5b99ea/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3KjdkGvLKPOcUPdncZLgBL/ad647662227b1bbb8f3a0f33bb94a0ff/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/241sppYlXnHm6GFUJso5Fg/23d9634d96324b91ba8e67c08842e68b/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/75Y48ycVjmVd4Md0jdFK1h/ec1c1526a4ab93297e14d9b715c43778/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uU8SKVz3c9LJq9J2QPXUx/c6db94d1b9633826ea9f6098f7e88009/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0t8WeFb2mOplpmP4tBihng/b06c844a382c40efcb53a3373379ee6f/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Walnut Burst',
                    label: 'Walnut Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'L-00 Studio Walnut',
          },
          description: {
            'en-US':
              'The new L-00 Studio offers one of our most famous icon guitars built with walnut back and sides. Available in both Antique Natural and our hand sprayed Walnut Burst finish. Finished with an active under-saddle piezo pickup for easy studio quality plug and play anywhere!',
          },
          categories: [
            {
              typeId: 'category',
              id: '303d6c9f-4add-4217-8a34-144187ff3696',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'l-00-studio-walnut',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCX5Q355ANR',
            key: 'ACCX5Q355ANR',
            prices: [
              {
                id: '78a8dd37-0bfb-4e86-8394-5b1f94cc2afb',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 184900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 166410,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3EoPIRIYwvRSmUph86lJuB/09f36c6a063f4a9d0cb579ce4e974345/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/39AiwAfXKoLBISPLU2JhrR/c93e462b43ea75b1fd598b23c5be3fba/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7JNohLyREcbvtXgRQWumfQ/d8f8c3b71d23078167d39ef63c38e4d2/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2c6RIhemEABPDHwcweFis6/93d58963b7c0f7962401da554886d3fc/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Kw2MQDDFn1SqJdZGxy3bi/a62509359f869ef9b09c06a7155753e0/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5Na770U937NC9CyxJ6ko9M/ebce14290e41967ca975564b3a53c7fd/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/11kUNn09hrNyQvl1qgtQX0/ac86d91782d36e09a5bd3e2e95eff741/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZPW3pnONtTFwkKc5eKlaQ/a66d4b09e79b0e76ec592c2e96545d53/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5IAXzQU2bdrXGj8x6neYhO/044f072d71ff83486af1c147953a4698/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Antique Natural',
                  label: 'Antique Natural',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCX5Q355ANL',
              key: 'ACCX5Q355ANL',
              prices: [
                {
                  id: 'a3b9213a-4efa-4e0d-bc76-bcc4fcd89045',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3EoPIRIYwvRSmUph86lJuB/09f36c6a063f4a9d0cb579ce4e974345/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/39AiwAfXKoLBISPLU2JhrR/c93e462b43ea75b1fd598b23c5be3fba/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7JNohLyREcbvtXgRQWumfQ/d8f8c3b71d23078167d39ef63c38e4d2/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_MCSBLSWLAN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2c6RIhemEABPDHwcweFis6/93d58963b7c0f7962401da554886d3fc/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Kw2MQDDFn1SqJdZGxy3bi/a62509359f869ef9b09c06a7155753e0/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Na770U937NC9CyxJ6ko9M/ebce14290e41967ca975564b3a53c7fd/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/11kUNn09hrNyQvl1qgtQX0/ac86d91782d36e09a5bd3e2e95eff741/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6ZPW3pnONtTFwkKc5eKlaQ/a66d4b09e79b0e76ec592c2e96545d53/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5IAXzQU2bdrXGj8x6neYhO/044f072d71ff83486af1c147953a4698/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Antique_Natural_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Antique Natural',
                    label: 'Antique Natural',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCX5Q355WBR',
              key: 'ACCX5Q355WBR',
              prices: [
                {
                  id: '29d843fb-7af1-4190-9415-1144c685bf5f',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5yNkw1gggYJjbacfu3ZxGj/8814f2195104d30f2dc5e19f7d87a19d/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KzdYovlIKRNqf76iaLyur/bac2d1434833aced8f438c2e68f95271/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TV1DUdomqJqHV1d9hI5u8/721579c6830e5745b210effcb9102cdb/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bV1A1KVaajBq1Dab2I63I/3ab42d10d3eeb91c530df5523e5b99ea/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3KjdkGvLKPOcUPdncZLgBL/ad647662227b1bbb8f3a0f33bb94a0ff/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/241sppYlXnHm6GFUJso5Fg/23d9634d96324b91ba8e67c08842e68b/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/75Y48ycVjmVd4Md0jdFK1h/ec1c1526a4ab93297e14d9b715c43778/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uU8SKVz3c9LJq9J2QPXUx/c6db94d1b9633826ea9f6098f7e88009/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0t8WeFb2mOplpmP4tBihng/b06c844a382c40efcb53a3373379ee6f/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Walnut Burst',
                    label: 'Walnut Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCX5Q355WBL',
              key: 'ACCX5Q355WBL',
              prices: [
                {
                  id: '655922c3-2602-46aa-8fc3-c00b763f6280',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 184900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 166410,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5yNkw1gggYJjbacfu3ZxGj/8814f2195104d30f2dc5e19f7d87a19d/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KzdYovlIKRNqf76iaLyur/bac2d1434833aced8f438c2e68f95271/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2TV1DUdomqJqHV1d9hI5u8/721579c6830e5745b210effcb9102cdb/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_MCSBLSWLWB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bV1A1KVaajBq1Dab2I63I/3ab42d10d3eeb91c530df5523e5b99ea/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3KjdkGvLKPOcUPdncZLgBL/ad647662227b1bbb8f3a0f33bb94a0ff/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/241sppYlXnHm6GFUJso5Fg/23d9634d96324b91ba8e67c08842e68b/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/75Y48ycVjmVd4Md0jdFK1h/ec1c1526a4ab93297e14d9b715c43778/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6uU8SKVz3c9LJq9J2QPXUx/c6db94d1b9633826ea9f6098f7e88009/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0t8WeFb2mOplpmP4tBihng/b06c844a382c40efcb53a3373379ee6f/__static.gibson.com_product-images_Acoustic_ACCX5Q355_Walnut_Burst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Walnut Burst',
                    label: 'Walnut Burst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'l-00-studio-walnut',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: '787e2898-f877-4154-a7ca-6ca6edf96021',
      version: 3,
      versionModifiedAt: '2023-08-29T11:46:39.127Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-29T11:44:56.443Z',
      lastModifiedAt: '2023-08-29T11:46:39.127Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'L-00 Original',
          },
          description: {
            'en-US':
              'Gibson was a pioneer in the development of small body guitars in the beginning of the 1900s with its "L-Series Small Body" acoustics. These smaller Gibsons deliver a tonality that is best described in Gibson\'s 1934 catalog as a sound of "perfect balance." The L-00 Original, while achieving all the advantages of an acoustic that is comfortable to play in your home, still produces Gibson\'s rich full sound. The new L-00 Original features a classic white script Gibson logo, subtle antiquing on the top and back binding, and Golden Age nickel tuners.',
          },
          categories: [
            {
              typeId: 'category',
              id: '303d6c9f-4add-4217-8a34-144187ff3696',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'l-00-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCL5X202ER',
            key: 'ACCL5X202ER',
            prices: [
              {
                id: '72cc0eff-1e39-4490-b273-e3e45fb14bb7',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6UKGVv8Q8q2nYR6rR0pFj7/8c5c24013f65e44b353d58bcf85d1fc7/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6NPBWFZHFtTa410nsBBJ26/19d13711f26ecfbdcc663a1753ca5b60/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4fGkHXDf1nWqoYJgFBlNQt/8d85031fdffb86d0342ce28102fefa49/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/56KRs0IzJetzqJgdO8tRO7/0d940b8fdfd422415a85fe1d2c0d3725/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0atKR8o0tmqSAwgfVfFjpd/49cfab18a9b4cc2909aef58ce44114cd/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1704TXpEZ0JBC7TN9iTnSY/cf2bbbc6fcc437fdcfe88540516ef9f9/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCL5X202EL',
              key: 'ACCL5X202EL',
              prices: [
                {
                  id: '2f9b6483-1103-4049-91b5-9b134b1f4cc6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6UKGVv8Q8q2nYR6rR0pFj7/8c5c24013f65e44b353d58bcf85d1fc7/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NPBWFZHFtTa410nsBBJ26/19d13711f26ecfbdcc663a1753ca5b60/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4fGkHXDf1nWqoYJgFBlNQt/8d85031fdffb86d0342ce28102fefa49/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/56KRs0IzJetzqJgdO8tRO7/0d940b8fdfd422415a85fe1d2c0d3725/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0atKR8o0tmqSAwgfVfFjpd/49cfab18a9b4cc2909aef58ce44114cd/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1704TXpEZ0JBC7TN9iTnSY/cf2bbbc6fcc437fdcfe88540516ef9f9/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCL5X202VSR',
              key: 'ACCL5X202VSR',
              prices: [
                {
                  id: 'ec46dc03-a8ec-47ad-8cac-414e0547d5d6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d38OYl6j8h1GMPKLlrtYU/7a5430d326b24dd9c45b9f33951529a4/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS.front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vJosBm3mqfc1SC3idbTzX/8b3148e98d2307cb68b74bea8a7cc31f/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3XrquNc33xOZ5xTz9Hrvbb/44356eb2af91ac6ab8322fd0463ea467/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4yVCfwa33mMvEYpAcuC86J/db7f79c368edba810efa22bdb4d6e8fc/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JG5p3i3wLjJAdveYWZLKN/95b4eb7fbc7a762dd5ec5810eb97af32/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/02vP6jP0TZ433RnDq7su9T/1f1f9cbce0136b490c9b68ebd419e3aa/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/025DS2HDaoIqiKxqRI88rn/a5710c34ae1a2cea5c94fd79408de073/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gSmLdaVooxNCtzu92N0M6/4c435afb843eb8e676c0830d83038ce3/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/53u56QkUrIN8YBcVNLWiml/7c67e9f73be85f4570ad9c1392715716/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCL5X202VSL',
              key: 'ACCL5X202VSL',
              prices: [
                {
                  id: '658425ca-e46c-4072-89cf-f4463ba87464',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d38OYl6j8h1GMPKLlrtYU/7a5430d326b24dd9c45b9f33951529a4/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS.front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vJosBm3mqfc1SC3idbTzX/8b3148e98d2307cb68b74bea8a7cc31f/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3XrquNc33xOZ5xTz9Hrvbb/44356eb2af91ac6ab8322fd0463ea467/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4yVCfwa33mMvEYpAcuC86J/db7f79c368edba810efa22bdb4d6e8fc/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JG5p3i3wLjJAdveYWZLKN/95b4eb7fbc7a762dd5ec5810eb97af32/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/02vP6jP0TZ433RnDq7su9T/1f1f9cbce0136b490c9b68ebd419e3aa/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/025DS2HDaoIqiKxqRI88rn/a5710c34ae1a2cea5c94fd79408de073/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gSmLdaVooxNCtzu92N0M6/4c435afb843eb8e676c0830d83038ce3/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/53u56QkUrIN8YBcVNLWiml/7c67e9f73be85f4570ad9c1392715716/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'L-00 Original',
          },
          description: {
            'en-US':
              'Gibson was a pioneer in the development of small body guitars in the beginning of the 1900s with its "L-Series Small Body" acoustics. These smaller Gibsons deliver a tonality that is best described in Gibson\'s 1934 catalog as a sound of "perfect balance." The L-00 Original, while achieving all the advantages of an acoustic that is comfortable to play in your home, still produces Gibson\'s rich full sound. The new L-00 Original features a classic white script Gibson logo, subtle antiquing on the top and back binding, and Golden Age nickel tuners.',
          },
          categories: [
            {
              typeId: 'category',
              id: '303d6c9f-4add-4217-8a34-144187ff3696',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'l-00-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCL5X202ER',
            key: 'ACCL5X202ER',
            prices: [
              {
                id: '72cc0eff-1e39-4490-b273-e3e45fb14bb7',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6UKGVv8Q8q2nYR6rR0pFj7/8c5c24013f65e44b353d58bcf85d1fc7/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6NPBWFZHFtTa410nsBBJ26/19d13711f26ecfbdcc663a1753ca5b60/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4fGkHXDf1nWqoYJgFBlNQt/8d85031fdffb86d0342ce28102fefa49/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/56KRs0IzJetzqJgdO8tRO7/0d940b8fdfd422415a85fe1d2c0d3725/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0atKR8o0tmqSAwgfVfFjpd/49cfab18a9b4cc2909aef58ce44114cd/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1704TXpEZ0JBC7TN9iTnSY/cf2bbbc6fcc437fdcfe88540516ef9f9/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCL5X202EL',
              key: 'ACCL5X202EL',
              prices: [
                {
                  id: '2f9b6483-1103-4049-91b5-9b134b1f4cc6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6UKGVv8Q8q2nYR6rR0pFj7/8c5c24013f65e44b353d58bcf85d1fc7/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6NPBWFZHFtTa410nsBBJ26/19d13711f26ecfbdcc663a1753ca5b60/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_OCSBL0EB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4fGkHXDf1nWqoYJgFBlNQt/8d85031fdffb86d0342ce28102fefa49/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/56KRs0IzJetzqJgdO8tRO7/0d940b8fdfd422415a85fe1d2c0d3725/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0atKR8o0tmqSAwgfVfFjpd/49cfab18a9b4cc2909aef58ce44114cd/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1704TXpEZ0JBC7TN9iTnSY/cf2bbbc6fcc437fdcfe88540516ef9f9/__static.gibson.com_product-images_Acoustic_ACCL5X202_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCL5X202VSR',
              key: 'ACCL5X202VSR',
              prices: [
                {
                  id: 'ec46dc03-a8ec-47ad-8cac-414e0547d5d6',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d38OYl6j8h1GMPKLlrtYU/7a5430d326b24dd9c45b9f33951529a4/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS.front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vJosBm3mqfc1SC3idbTzX/8b3148e98d2307cb68b74bea8a7cc31f/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3XrquNc33xOZ5xTz9Hrvbb/44356eb2af91ac6ab8322fd0463ea467/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4yVCfwa33mMvEYpAcuC86J/db7f79c368edba810efa22bdb4d6e8fc/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JG5p3i3wLjJAdveYWZLKN/95b4eb7fbc7a762dd5ec5810eb97af32/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/02vP6jP0TZ433RnDq7su9T/1f1f9cbce0136b490c9b68ebd419e3aa/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/025DS2HDaoIqiKxqRI88rn/a5710c34ae1a2cea5c94fd79408de073/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gSmLdaVooxNCtzu92N0M6/4c435afb843eb8e676c0830d83038ce3/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/53u56QkUrIN8YBcVNLWiml/7c67e9f73be85f4570ad9c1392715716/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCL5X202VSL',
              key: 'ACCL5X202VSL',
              prices: [
                {
                  id: '658425ca-e46c-4072-89cf-f4463ba87464',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7d38OYl6j8h1GMPKLlrtYU/7a5430d326b24dd9c45b9f33951529a4/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS.front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5vJosBm3mqfc1SC3idbTzX/8b3148e98d2307cb68b74bea8a7cc31f/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3XrquNc33xOZ5xTz9Hrvbb/44356eb2af91ac6ab8322fd0463ea467/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_OCSBL0VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4yVCfwa33mMvEYpAcuC86J/db7f79c368edba810efa22bdb4d6e8fc/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5JG5p3i3wLjJAdveYWZLKN/95b4eb7fbc7a762dd5ec5810eb97af32/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/02vP6jP0TZ433RnDq7su9T/1f1f9cbce0136b490c9b68ebd419e3aa/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/025DS2HDaoIqiKxqRI88rn/a5710c34ae1a2cea5c94fd79408de073/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3gSmLdaVooxNCtzu92N0M6/4c435afb843eb8e676c0830d83038ce3/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/53u56QkUrIN8YBcVNLWiml/7c67e9f73be85f4570ad9c1392715716/__static.gibson.com_product-images_Acoustic_ACCL5X202_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'l-00-original',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: '84cbe729-b038-4923-b642-dfbdb521da4d',
      version: 3,
      versionModifiedAt: '2023-08-30T07:42:31.659Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T07:41:39.897Z',
      lastModifiedAt: '2023-08-30T07:42:31.659Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Southern Jumbo Original',
          },
          description: {
            'en-US':
              'The Southern Jumbo is renowned for its proficiency to belt out country rhythms or acoustic blues leads. Original examples are among the most prized war-era flat-tops in today�s vintage market. This new Southern Jumbo Original picks up where those classic models left off. Classic Southern Jumbo detailing includes parallelogram inlays, double antiqued multi-ply top and back binding, and nickel open back tuners.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'southern-jumbo-original',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRSSJVSVSR',
            key: 'OCRSSJVSVSR',
            prices: [
              {
                id: 'bc625ebc-d643-47d0-b692-2bc449cbdbf0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 349900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 314910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7APPdFiBTWgrsqQnlflyd7/a6a5b1511e4c4c92e6b28c8ba1d267fc/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2QM536LEeTddjd9jG96m3W/ffec6407e3bc3cb2b096628568e26b02/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/26Qdip3vQOq3lswIWUi4ph/90ed8f8d211c218a5cfbdbd05c73c5eb/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1QWjJ1GHux5tvyhX0j4l7D/303d1bf91cf376cf775e5944bfcd1e79/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1mRkUvMca87erATU8eSYIs/93693b1619602c4dbbdf1ae947a4489f/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0vtUYcKRzxEXJJPMvUp2HM/bf276a90d1a8a96f632fb6162bf46816/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0NcDV5tZWmaPKn9wC6j3Rs/6286054545aa2ced93fe4e9080ecc983/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2IdqJMslfweWG4dvIYlJnO/ad72c58057b369b3f958667cc3e53f4a/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7amkeAHNdha2yuWlwWZpMN/05032d6a8926864cc8db31e4cf61f008/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Vintage Sunburst',
                  label: 'Vintage Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRSSJVSVSL',
              key: 'OCRSSJVSVSL',
              prices: [
                {
                  id: '24a44bbc-8118-4351-b0d7-50f8b39208b8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 349900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 314910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7APPdFiBTWgrsqQnlflyd7/a6a5b1511e4c4c92e6b28c8ba1d267fc/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2QM536LEeTddjd9jG96m3W/ffec6407e3bc3cb2b096628568e26b02/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/26Qdip3vQOq3lswIWUi4ph/90ed8f8d211c218a5cfbdbd05c73c5eb/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1QWjJ1GHux5tvyhX0j4l7D/303d1bf91cf376cf775e5944bfcd1e79/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1mRkUvMca87erATU8eSYIs/93693b1619602c4dbbdf1ae947a4489f/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0vtUYcKRzxEXJJPMvUp2HM/bf276a90d1a8a96f632fb6162bf46816/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NcDV5tZWmaPKn9wC6j3Rs/6286054545aa2ced93fe4e9080ecc983/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2IdqJMslfweWG4dvIYlJnO/ad72c58057b369b3f958667cc3e53f4a/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7amkeAHNdha2yuWlwWZpMN/05032d6a8926864cc8db31e4cf61f008/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'Southern Jumbo Original',
          },
          description: {
            'en-US':
              'The Southern Jumbo is renowned for its proficiency to belt out country rhythms or acoustic blues leads. Original examples are among the most prized war-era flat-tops in today�s vintage market. This new Southern Jumbo Original picks up where those classic models left off. Classic Southern Jumbo detailing includes parallelogram inlays, double antiqued multi-ply top and back binding, and nickel open back tuners.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'southern-jumbo-original',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRSSJVSVSR',
            key: 'OCRSSJVSVSR',
            prices: [
              {
                id: 'bc625ebc-d643-47d0-b692-2bc449cbdbf0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 349900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 314910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7APPdFiBTWgrsqQnlflyd7/a6a5b1511e4c4c92e6b28c8ba1d267fc/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2QM536LEeTddjd9jG96m3W/ffec6407e3bc3cb2b096628568e26b02/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/26Qdip3vQOq3lswIWUi4ph/90ed8f8d211c218a5cfbdbd05c73c5eb/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1QWjJ1GHux5tvyhX0j4l7D/303d1bf91cf376cf775e5944bfcd1e79/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1mRkUvMca87erATU8eSYIs/93693b1619602c4dbbdf1ae947a4489f/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0vtUYcKRzxEXJJPMvUp2HM/bf276a90d1a8a96f632fb6162bf46816/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0NcDV5tZWmaPKn9wC6j3Rs/6286054545aa2ced93fe4e9080ecc983/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2IdqJMslfweWG4dvIYlJnO/ad72c58057b369b3f958667cc3e53f4a/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7amkeAHNdha2yuWlwWZpMN/05032d6a8926864cc8db31e4cf61f008/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Vintage Sunburst',
                  label: 'Vintage Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRSSJVSVSL',
              key: 'OCRSSJVSVSL',
              prices: [
                {
                  id: '24a44bbc-8118-4351-b0d7-50f8b39208b8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 349900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 314910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7APPdFiBTWgrsqQnlflyd7/a6a5b1511e4c4c92e6b28c8ba1d267fc/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2QM536LEeTddjd9jG96m3W/ffec6407e3bc3cb2b096628568e26b02/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/26Qdip3vQOq3lswIWUi4ph/90ed8f8d211c218a5cfbdbd05c73c5eb/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_OCRSSJVS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1QWjJ1GHux5tvyhX0j4l7D/303d1bf91cf376cf775e5944bfcd1e79/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1mRkUvMca87erATU8eSYIs/93693b1619602c4dbbdf1ae947a4489f/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0vtUYcKRzxEXJJPMvUp2HM/bf276a90d1a8a96f632fb6162bf46816/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0NcDV5tZWmaPKn9wC6j3Rs/6286054545aa2ced93fe4e9080ecc983/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2IdqJMslfweWG4dvIYlJnO/ad72c58057b369b3f958667cc3e53f4a/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7amkeAHNdha2yuWlwWZpMN/05032d6a8926864cc8db31e4cf61f008/__static.gibson.com_product-images_Acoustic_ACCYBI462_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'southern-jumbo-original',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 2,
    },
    {
      id: 'f6086c80-0b3a-4ff8-83e1-a355b7f66ef4',
      version: 3,
      versionModifiedAt: '2023-08-30T07:42:32.092Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T07:41:39.910Z',
      lastModifiedAt: '2023-08-30T07:42:32.092Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': '60s J-45 Original',
          },
          description: {
            'en-US':
              "When you listen to a Gibson round-shoulder acoustic, you will notice that it responds exactly to the player's style and technique - powerful one moment, soft and mellow the next. This 60s J-45 Original offers a period-correct 1 11/16�� nut width, allowing for comfortable fingering in any position along the mahogany neck. The easily-adjustable saddle can be fine-tuned to players' unique string action preference. The new 60s J-45 Original features double antiqued binding, Grover strap cream button tuners, and our famous white pickguard with hot stamp logo.",
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': '60s-j-45-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCJ5F910ER',
            key: 'ACCJ5F910ER',
            prices: [
              {
                id: '985a8294-92d0-424e-a599-1051baf57522',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4j63PxIa8XibmbvTq9mgCR/a1c9be11273e2f5785f71929dc97e121/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4bcgM1r4MbZ2KdGDhln7wt/2984af77c7625c96c320138d655f579c/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/08zLioQ5K8WDIlgiYHHell/29029bbb1678fd949d38d31fba5eff04/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3S3NwjhskXAiOXApyHwkL8/c0045f5d5376c8bcbafd56c3ef38a0b3/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3Wpibc1n2UzNY1QYsc7PLJ/fdb1cd1ad5172c1f06322e41e9d5cfa8/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0zTVRmYzyzVDss6nTZ2EyX/99600195124ea77986a1c16723b5e3d5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1EHWU9ly42RGdFNUVGNB07/199bacee679f89a5e64a4921769b464d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4EDivXxisDnYiW47XcNG2n/bac82aba1e9b81254bdc74c193572047/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/28WHX6zuxJzPeTcy1L01Ak/5d5d9b5ddc94177eeef7f17d4f1577b5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: '',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCJ5F910EL',
              key: 'ACCJ5F910EL',
              prices: [
                {
                  id: '38b85b01-c5e5-4a8e-9c6a-1dc6171d7d19',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4j63PxIa8XibmbvTq9mgCR/a1c9be11273e2f5785f71929dc97e121/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4bcgM1r4MbZ2KdGDhln7wt/2984af77c7625c96c320138d655f579c/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/08zLioQ5K8WDIlgiYHHell/29029bbb1678fd949d38d31fba5eff04/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3S3NwjhskXAiOXApyHwkL8/c0045f5d5376c8bcbafd56c3ef38a0b3/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3Wpibc1n2UzNY1QYsc7PLJ/fdb1cd1ad5172c1f06322e41e9d5cfa8/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0zTVRmYzyzVDss6nTZ2EyX/99600195124ea77986a1c16723b5e3d5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1EHWU9ly42RGdFNUVGNB07/199bacee679f89a5e64a4921769b464d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4EDivXxisDnYiW47XcNG2n/bac82aba1e9b81254bdc74c193572047/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28WHX6zuxJzPeTcy1L01Ak/5d5d9b5ddc94177eeef7f17d4f1577b5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: '',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCJ5F910EDWRR',
              key: 'ACCJ5F910EDWRR',
              prices: [
                {
                  id: 'ca75b3c1-ef8b-4af5-92a6-2ba70278fd94',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5h9v9cEJNdyX1L0Lx3u7B8/fbf38a52dada3071eb69e8098a3fb230/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3t3zP89jInVoloCBAJyC6t/a8a98b7f35a964e12b3694c3445e618d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WOOi2brdJpzlp0W1dXpNw/a4bb95fc2f3e9e7b8f89454b3f2d11ef/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/30BUq1DxCPuBaRTmPVXOue/cf6a7a065c2fc64d3269b525b6b7b97a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PKVa6Myv8RED8ZgIItDMj/64686456b395ad982b6bc861d61d639a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0Hry3wQu3UMW9RQT1RqJcn/e98050edcf32e310bee34235b173b435/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0RctghRt1BO0ckIYYNlNgE/0285541171b82f39419fb99416aedfd1/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/55uJSYk5195uLt7hnY0r3A/af10f51150031bbf6b49b11e8df28ebf/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bbR9wGsZi9erO2mQOfC8q/ccd649d3c2b77d4338630c3bf9131c4b/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCJ5F910EDWRL',
              key: 'ACCJ5F910EDWRL',
              prices: [
                {
                  id: 'd8a331b8-a82a-4ef1-96bf-1411011f6feb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5h9v9cEJNdyX1L0Lx3u7B8/fbf38a52dada3071eb69e8098a3fb230/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3t3zP89jInVoloCBAJyC6t/a8a98b7f35a964e12b3694c3445e618d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WOOi2brdJpzlp0W1dXpNw/a4bb95fc2f3e9e7b8f89454b3f2d11ef/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/30BUq1DxCPuBaRTmPVXOue/cf6a7a065c2fc64d3269b525b6b7b97a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PKVa6Myv8RED8ZgIItDMj/64686456b395ad982b6bc861d61d639a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0Hry3wQu3UMW9RQT1RqJcn/e98050edcf32e310bee34235b173b435/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0RctghRt1BO0ckIYYNlNgE/0285541171b82f39419fb99416aedfd1/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/55uJSYk5195uLt7hnY0r3A/af10f51150031bbf6b49b11e8df28ebf/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bbR9wGsZi9erO2mQOfC8q/ccd649d3c2b77d4338630c3bf9131c4b/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': '60s J-45 Original',
          },
          description: {
            'en-US':
              "When you listen to a Gibson round-shoulder acoustic, you will notice that it responds exactly to the player's style and technique - powerful one moment, soft and mellow the next. This 60s J-45 Original offers a period-correct 1 11/16�� nut width, allowing for comfortable fingering in any position along the mahogany neck. The easily-adjustable saddle can be fine-tuned to players' unique string action preference. The new 60s J-45 Original features double antiqued binding, Grover strap cream button tuners, and our famous white pickguard with hot stamp logo.",
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': '60s-j-45-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCJ5F910ER',
            key: 'ACCJ5F910ER',
            prices: [
              {
                id: '985a8294-92d0-424e-a599-1051baf57522',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4j63PxIa8XibmbvTq9mgCR/a1c9be11273e2f5785f71929dc97e121/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4bcgM1r4MbZ2KdGDhln7wt/2984af77c7625c96c320138d655f579c/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/08zLioQ5K8WDIlgiYHHell/29029bbb1678fd949d38d31fba5eff04/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3S3NwjhskXAiOXApyHwkL8/c0045f5d5376c8bcbafd56c3ef38a0b3/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3Wpibc1n2UzNY1QYsc7PLJ/fdb1cd1ad5172c1f06322e41e9d5cfa8/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0zTVRmYzyzVDss6nTZ2EyX/99600195124ea77986a1c16723b5e3d5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1EHWU9ly42RGdFNUVGNB07/199bacee679f89a5e64a4921769b464d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4EDivXxisDnYiW47XcNG2n/bac82aba1e9b81254bdc74c193572047/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/28WHX6zuxJzPeTcy1L01Ak/5d5d9b5ddc94177eeef7f17d4f1577b5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: '',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCJ5F910EL',
              key: 'ACCJ5F910EL',
              prices: [
                {
                  id: '38b85b01-c5e5-4a8e-9c6a-1dc6171d7d19',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4j63PxIa8XibmbvTq9mgCR/a1c9be11273e2f5785f71929dc97e121/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4bcgM1r4MbZ2KdGDhln7wt/2984af77c7625c96c320138d655f579c/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/08zLioQ5K8WDIlgiYHHell/29029bbb1678fd949d38d31fba5eff04/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_OCRS4560EBN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3S3NwjhskXAiOXApyHwkL8/c0045f5d5376c8bcbafd56c3ef38a0b3/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3Wpibc1n2UzNY1QYsc7PLJ/fdb1cd1ad5172c1f06322e41e9d5cfa8/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0zTVRmYzyzVDss6nTZ2EyX/99600195124ea77986a1c16723b5e3d5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1EHWU9ly42RGdFNUVGNB07/199bacee679f89a5e64a4921769b464d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4EDivXxisDnYiW47XcNG2n/bac82aba1e9b81254bdc74c193572047/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28WHX6zuxJzPeTcy1L01Ak/5d5d9b5ddc94177eeef7f17d4f1577b5/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: '',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'ACCJ5F910EDWRR',
              key: 'ACCJ5F910EDWRR',
              prices: [
                {
                  id: 'ca75b3c1-ef8b-4af5-92a6-2ba70278fd94',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5h9v9cEJNdyX1L0Lx3u7B8/fbf38a52dada3071eb69e8098a3fb230/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3t3zP89jInVoloCBAJyC6t/a8a98b7f35a964e12b3694c3445e618d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WOOi2brdJpzlp0W1dXpNw/a4bb95fc2f3e9e7b8f89454b3f2d11ef/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/30BUq1DxCPuBaRTmPVXOue/cf6a7a065c2fc64d3269b525b6b7b97a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PKVa6Myv8RED8ZgIItDMj/64686456b395ad982b6bc861d61d639a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0Hry3wQu3UMW9RQT1RqJcn/e98050edcf32e310bee34235b173b435/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0RctghRt1BO0ckIYYNlNgE/0285541171b82f39419fb99416aedfd1/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/55uJSYk5195uLt7hnY0r3A/af10f51150031bbf6b49b11e8df28ebf/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bbR9wGsZi9erO2mQOfC8q/ccd649d3c2b77d4338630c3bf9131c4b/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'ACCJ5F910EDWRL',
              key: 'ACCJ5F910EDWRL',
              prices: [
                {
                  id: 'd8a331b8-a82a-4ef1-96bf-1411011f6feb',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 279900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 251910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5h9v9cEJNdyX1L0Lx3u7B8/fbf38a52dada3071eb69e8098a3fb230/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3t3zP89jInVoloCBAJyC6t/a8a98b7f35a964e12b3694c3445e618d/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2WOOi2brdJpzlp0W1dXpNw/a4bb95fc2f3e9e7b8f89454b3f2d11ef/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_OCRS4560WRN_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/30BUq1DxCPuBaRTmPVXOue/cf6a7a065c2fc64d3269b525b6b7b97a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4PKVa6Myv8RED8ZgIItDMj/64686456b395ad982b6bc861d61d639a/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0Hry3wQu3UMW9RQT1RqJcn/e98050edcf32e310bee34235b173b435/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0RctghRt1BO0ckIYYNlNgE/0285541171b82f39419fb99416aedfd1/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/55uJSYk5195uLt7hnY0r3A/af10f51150031bbf6b49b11e8df28ebf/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2bbR9wGsZi9erO2mQOfC8q/ccd649d3c2b77d4338630c3bf9131c4b/__static.gibson.com_product-images_Acoustic_ACCJ5F910_Wine_Red_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Dark Wine Red',
                    label: 'Dark Wine Red',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: '60s-j-45-original',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: 'a193ffe4-2aa3-4057-9c1c-3047a50261e5',
      version: 3,
      versionModifiedAt: '2023-08-30T07:42:31.790Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T07:41:39.898Z',
      lastModifiedAt: '2023-08-30T07:42:31.790Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'J-35 30s Faded',
          },
          description: {
            'en-US':
              'The J-35 evolved from the Jumbo in 1936, a time when the Great Depression was still wreaking havoc on Americans. Gibson developed the J-35 to be a pared-down model that still offered musicians a warm and balanced instrument. The J-35 30s Faded delivers every bit of the seasoned, vintage look, feel, and sound of our iconic J-35, with a satin nitrocellulose finish that only adds to its rich legacy and undeniable vintage vibe. Discerning flattop players will love the rich, full-bodied tone from this vintage-inspired, round-shoulder beauty, along with its superb playability and simple aesthetic charm. Includes a hardshell case.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-35-30s-faded',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRS3FANNR',
            key: 'OCRS3FANNR',
            prices: [
              {
                id: '2fe9dbb7-dfeb-4067-a8bb-abedc33ae8d0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 219900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 197910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/28suY1qeMfTk1SrBhdJqQP/0305f26d16ec6d9b271eecd672c42584/OCRS3FAN_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4wotKguiHni5vFDlcfkc5E/d5eb728e836a9e930b679001b783c473/OCRS3FAN_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5n8hLeKAKnAv9aD23Q9Ofj/dad7b2cffad12e794c3d6f12368d9c72/OCRS3FAN_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6cAQBZX2k3AMgK2CBN8HKp/cb86e420fe19e74a2ceccf512dade951/OCRS3FAN_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4nXDP0q4XxR39l81yifYqR/8ca83b00d2c9461055717a3f8669b761/OCRS3FAN_pup.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2imat1Wwx2ffkV9nG3WU6D/1e1aa4258addd8904749bc0dba96f7c4/OCRS3FAN_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3xog4Cs06xtya7cYXfg0gf/cf25e8d6b07fdbefba9e83da9059e67d/OCRS3FAN_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3fGU3TtmT62hWREw4U6rGK/08aaa627c0cad35b26c2090709268352/OCRS3FAN_lifestyle1.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1FDkQG6HAXEOdhEiXYQzlZ/d9945d5fb83654ab428f5dab3c9d21f4/OCRS3FAN_lifestyle2.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/zEl6RN5qECTicJYmm4EfQ/f415431f2382e2e95ca12c3f8438ad65/OCRS3FAN_lifestyle3.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRS3FANNL',
              key: 'OCRS3FANNL',
              prices: [
                {
                  id: '21acef85-6201-4d60-b1ec-bd8eb4537bc8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 219900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 197910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28suY1qeMfTk1SrBhdJqQP/0305f26d16ec6d9b271eecd672c42584/OCRS3FAN_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4wotKguiHni5vFDlcfkc5E/d5eb728e836a9e930b679001b783c473/OCRS3FAN_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5n8hLeKAKnAv9aD23Q9Ofj/dad7b2cffad12e794c3d6f12368d9c72/OCRS3FAN_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6cAQBZX2k3AMgK2CBN8HKp/cb86e420fe19e74a2ceccf512dade951/OCRS3FAN_beauty.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4nXDP0q4XxR39l81yifYqR/8ca83b00d2c9461055717a3f8669b761/OCRS3FAN_pup.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2imat1Wwx2ffkV9nG3WU6D/1e1aa4258addd8904749bc0dba96f7c4/OCRS3FAN_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3xog4Cs06xtya7cYXfg0gf/cf25e8d6b07fdbefba9e83da9059e67d/OCRS3FAN_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fGU3TtmT62hWREw4U6rGK/08aaa627c0cad35b26c2090709268352/OCRS3FAN_lifestyle1.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1FDkQG6HAXEOdhEiXYQzlZ/d9945d5fb83654ab428f5dab3c9d21f4/OCRS3FAN_lifestyle2.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/zEl6RN5qECTicJYmm4EfQ/f415431f2382e2e95ca12c3f8438ad65/OCRS3FAN_lifestyle3.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': 'J-35 30s Faded',
          },
          description: {
            'en-US':
              'The J-35 evolved from the Jumbo in 1936, a time when the Great Depression was still wreaking havoc on Americans. Gibson developed the J-35 to be a pared-down model that still offered musicians a warm and balanced instrument. The J-35 30s Faded delivers every bit of the seasoned, vintage look, feel, and sound of our iconic J-35, with a satin nitrocellulose finish that only adds to its rich legacy and undeniable vintage vibe. Discerning flattop players will love the rich, full-bodied tone from this vintage-inspired, round-shoulder beauty, along with its superb playability and simple aesthetic charm. Includes a hardshell case.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-35-30s-faded',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRS3FANNR',
            key: 'OCRS3FANNR',
            prices: [
              {
                id: '2fe9dbb7-dfeb-4067-a8bb-abedc33ae8d0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 219900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 197910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/28suY1qeMfTk1SrBhdJqQP/0305f26d16ec6d9b271eecd672c42584/OCRS3FAN_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4wotKguiHni5vFDlcfkc5E/d5eb728e836a9e930b679001b783c473/OCRS3FAN_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5n8hLeKAKnAv9aD23Q9Ofj/dad7b2cffad12e794c3d6f12368d9c72/OCRS3FAN_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6cAQBZX2k3AMgK2CBN8HKp/cb86e420fe19e74a2ceccf512dade951/OCRS3FAN_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4nXDP0q4XxR39l81yifYqR/8ca83b00d2c9461055717a3f8669b761/OCRS3FAN_pup.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2imat1Wwx2ffkV9nG3WU6D/1e1aa4258addd8904749bc0dba96f7c4/OCRS3FAN_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3xog4Cs06xtya7cYXfg0gf/cf25e8d6b07fdbefba9e83da9059e67d/OCRS3FAN_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3fGU3TtmT62hWREw4U6rGK/08aaa627c0cad35b26c2090709268352/OCRS3FAN_lifestyle1.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1FDkQG6HAXEOdhEiXYQzlZ/d9945d5fb83654ab428f5dab3c9d21f4/OCRS3FAN_lifestyle2.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/zEl6RN5qECTicJYmm4EfQ/f415431f2382e2e95ca12c3f8438ad65/OCRS3FAN_lifestyle3.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRS3FANNL',
              key: 'OCRS3FANNL',
              prices: [
                {
                  id: '21acef85-6201-4d60-b1ec-bd8eb4537bc8',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 219900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 197910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/28suY1qeMfTk1SrBhdJqQP/0305f26d16ec6d9b271eecd672c42584/OCRS3FAN_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4wotKguiHni5vFDlcfkc5E/d5eb728e836a9e930b679001b783c473/OCRS3FAN_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5n8hLeKAKnAv9aD23Q9Ofj/dad7b2cffad12e794c3d6f12368d9c72/OCRS3FAN_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6cAQBZX2k3AMgK2CBN8HKp/cb86e420fe19e74a2ceccf512dade951/OCRS3FAN_beauty.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4nXDP0q4XxR39l81yifYqR/8ca83b00d2c9461055717a3f8669b761/OCRS3FAN_pup.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2imat1Wwx2ffkV9nG3WU6D/1e1aa4258addd8904749bc0dba96f7c4/OCRS3FAN_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3xog4Cs06xtya7cYXfg0gf/cf25e8d6b07fdbefba9e83da9059e67d/OCRS3FAN_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3fGU3TtmT62hWREw4U6rGK/08aaa627c0cad35b26c2090709268352/OCRS3FAN_lifestyle1.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1FDkQG6HAXEOdhEiXYQzlZ/d9945d5fb83654ab428f5dab3c9d21f4/OCRS3FAN_lifestyle2.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/zEl6RN5qECTicJYmm4EfQ/f415431f2382e2e95ca12c3f8438ad65/OCRS3FAN_lifestyle3.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: 'j-35-30s-faded',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 2,
    },
    {
      id: '61f22cf1-da41-42bb-953b-0bcac33ecae4',
      version: 3,
      versionModifiedAt: '2023-08-30T07:42:32.015Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T07:41:39.902Z',
      lastModifiedAt: '2023-08-30T07:42:32.015Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'J-35, Exclusive',
          },
          description: {
            'en-US':
              'The J-35 evolved from the Jumbo in 1936, a time when the Great Depression was still wreaking havoc on Americans. Gibson developed the J-35 to be a pared-down model that still offered musicians a warm and balanced instrument. This J-35 delivers every bit of the seasoned, vintage look, feel, and sound of those classic models. Discerning flat-top players will love the rich, full-bodied tone from this vintage-inspired, round-shoulder beauty, along with its superb playability and simple aesthetic charm. Includes a hardshell case.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-35-exclusive',
          },
          masterVariant: {
            id: 1,
            sku: 'DTCRS35VSVSR',
            key: 'DTCRS35VSVSR',
            prices: [
              {
                id: 'd0ba7186-3e57-4047-b079-f04fe8a541a4',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 284900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 256410,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2uVo8GF4ETzZkiwqNngE4b/a222632547f87be35fe443a57023383b/DTCRS35VS_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3b2djiL7GMpQ6zVpLqhQbA/e0ee455fcceba596f1e51d5d63efb27d/DTCRS35VS_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5vpUWL2nFuhHYgjUeQDVjt/48d91eec8d015f023ba81c9786d42657/DTCRS35VS_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5YWqIpkCN6xm1YH1TZZ274/ab73c7c8f88e8b0f73a5c3ecaf0de65b/DTCRS35VS_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/63kUnVOD3uWIClyMS752Ye/fa26a72f5c5d4e5491761a85dea7eccb/DTCRS35VS_preamp.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/74rNGefnEyPTZfFvFwH8Ss/f981b939e52e25225b1a600585d88241/DTCRS35VS_hs_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4NeLICkz3f6ez8LAuUEHBs/29c26512a7c7e623622a3f5ca18d074e/DTCRS35VS_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Vintage Sunburst',
                  label: 'Vintage Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US': 'J-35, Exclusive',
          },
          description: {
            'en-US':
              'The J-35 evolved from the Jumbo in 1936, a time when the Great Depression was still wreaking havoc on Americans. Gibson developed the J-35 to be a pared-down model that still offered musicians a warm and balanced instrument. This J-35 delivers every bit of the seasoned, vintage look, feel, and sound of those classic models. Discerning flat-top players will love the rich, full-bodied tone from this vintage-inspired, round-shoulder beauty, along with its superb playability and simple aesthetic charm. Includes a hardshell case.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-35-exclusive',
          },
          masterVariant: {
            id: 1,
            sku: 'DTCRS35VSVSR',
            key: 'DTCRS35VSVSR',
            prices: [
              {
                id: 'd0ba7186-3e57-4047-b079-f04fe8a541a4',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 284900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 256410,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2uVo8GF4ETzZkiwqNngE4b/a222632547f87be35fe443a57023383b/DTCRS35VS_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3b2djiL7GMpQ6zVpLqhQbA/e0ee455fcceba596f1e51d5d63efb27d/DTCRS35VS_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5vpUWL2nFuhHYgjUeQDVjt/48d91eec8d015f023ba81c9786d42657/DTCRS35VS_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5YWqIpkCN6xm1YH1TZZ274/ab73c7c8f88e8b0f73a5c3ecaf0de65b/DTCRS35VS_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/63kUnVOD3uWIClyMS752Ye/fa26a72f5c5d4e5491761a85dea7eccb/DTCRS35VS_preamp.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/74rNGefnEyPTZfFvFwH8Ss/f981b939e52e25225b1a600585d88241/DTCRS35VS_hs_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4NeLICkz3f6ez8LAuUEHBs/29c26512a7c7e623622a3f5ca18d074e/DTCRS35VS_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Vintage Sunburst',
                  label: 'Vintage Sunburst',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: 'j-35-exclusive',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 1,
    },
    {
      id: 'd8956118-370b-43f0-83e1-a5edbaf90883',
      version: 8,
      versionModifiedAt: '2023-08-30T07:48:30.285Z',
      lastMessageSequenceNumber: 5,
      createdAt: '2023-08-30T07:41:39.927Z',
      lastModifiedAt: '2023-08-30T07:48:30.285Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'J-45 50s Faded',
          },
          description: {
            'en-US':
              'The J-45 is Gibson\'s best-selling acoustic of all time. Nicknamed "The Workhorse" and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 50s Faded delivers full-spectrum sound with incredible dynamic range, warm mids, and tight, punchy bass. Now available with a faded satin nitrocellulose lacquer finish that accentuates the guitar\'s vintage vibe and equipped with a modern LR Baggs pickup and electronics package for studio and stage use. A hardshell case is also included.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-45-50s-faded',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRS4FVSFSR',
            key: 'OCRS4FVSFSR',
            prices: [
              {
                id: '8c96e49c-133c-4ee1-a6ea-d7a62a750dc8',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2oxQhASiSAdW2Hbo8fSojz/747da0393b444b1e6de0c275e16f135b/OCRS4FVS_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Gd8S4mJi5HrYhzS9kxJOb/e46857bdd6215b2b303816a3ab0f96bd/OCRS4FVS_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6tyOafryZ0arR0Hin7ZCTy/554b11cfa98f22a64bf3491b8d895413/OCRS4FVS_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/23VuyXFVg4JJ0xIguol1Lp/2dc066c8412466e76d869572e443fbce/OCRS4FVS_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/fdBgR2eCo1MVO8Ts31tBm/2d1a924a465d1c90b7c04562bf90e99d/OCRS4FVS_pup.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2Qb06ErwU4KzxzPop8cOBq/6a9c6a8b6f51911bf30560492dbe94fe/OCRS4FVS_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/40LorGm6rZCw072inAXJg/1aa99a3ea394db1846d0aeaed6be20cb/OCRS4FVS_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1L7RU4I3gNZiDisXDA33gZ/9e910daa4d9d41195bcd8f0e3cdd4980/OCRS4FVS_lifestyle1.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1w2L8ksyVcGy0SGHBCvgXK/1ee8184c5908cbfcabe8e146e0a6096d/OCRS4FVS_lifestyle2.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
              {
                name: 'finish',
                value: {
                  key: 'Faded Sunburst',
                  label: 'Faded Sunburst',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRS4FVSFSL',
              key: 'OCRS4FVSFSL',
              prices: [
                {
                  id: 'a2ccc383-0b4e-41b3-89c9-e6c4f394d325',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2oxQhASiSAdW2Hbo8fSojz/747da0393b444b1e6de0c275e16f135b/OCRS4FVS_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1Gd8S4mJi5HrYhzS9kxJOb/e46857bdd6215b2b303816a3ab0f96bd/OCRS4FVS_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6tyOafryZ0arR0Hin7ZCTy/554b11cfa98f22a64bf3491b8d895413/OCRS4FVS_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/23VuyXFVg4JJ0xIguol1Lp/2dc066c8412466e76d869572e443fbce/OCRS4FVS_beauty.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/fdBgR2eCo1MVO8Ts31tBm/2d1a924a465d1c90b7c04562bf90e99d/OCRS4FVS_pup.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2Qb06ErwU4KzxzPop8cOBq/6a9c6a8b6f51911bf30560492dbe94fe/OCRS4FVS_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/40LorGm6rZCw072inAXJg/1aa99a3ea394db1846d0aeaed6be20cb/OCRS4FVS_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1L7RU4I3gNZiDisXDA33gZ/9e910daa4d9d41195bcd8f0e3cdd4980/OCRS4FVS_lifestyle1.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1w2L8ksyVcGy0SGHBCvgXK/1ee8184c5908cbfcabe8e146e0a6096d/OCRS4FVS_lifestyle2.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
                {
                  name: 'finish',
                  value: {
                    key: 'Faded Sunburst',
                    label: 'Faded Sunburst',
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
            'en-US': 'J-45 50s Faded',
          },
          description: {
            'en-US':
              'The J-45 is Gibson\'s best-selling acoustic of all time. Nicknamed "The Workhorse" and first introduced in 1942, this iconic acoustic has become the cornerstone of its round-shoulder, dreadnought line. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights. The Gibson J-45 50s Faded delivers full-spectrum sound with incredible dynamic range, warm mids, and tight, punchy bass. Now available with a faded satin nitrocellulose lacquer finish that accentuates the guitar\'s vintage vibe and equipped with a modern LR Baggs pickup and electronics package for studio and stage use. A hardshell case is also included.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'j-45-50s-faded',
          },
          masterVariant: {
            id: 1,
            sku: 'OCRS4FVSFSR',
            key: 'OCRS4FVSFSR',
            prices: [
              {
                id: '8c96e49c-133c-4ee1-a6ea-d7a62a750dc8',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 249900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 224910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2oxQhASiSAdW2Hbo8fSojz/747da0393b444b1e6de0c275e16f135b/OCRS4FVS_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1Gd8S4mJi5HrYhzS9kxJOb/e46857bdd6215b2b303816a3ab0f96bd/OCRS4FVS_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6tyOafryZ0arR0Hin7ZCTy/554b11cfa98f22a64bf3491b8d895413/OCRS4FVS_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/23VuyXFVg4JJ0xIguol1Lp/2dc066c8412466e76d869572e443fbce/OCRS4FVS_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/fdBgR2eCo1MVO8Ts31tBm/2d1a924a465d1c90b7c04562bf90e99d/OCRS4FVS_pup.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2Qb06ErwU4KzxzPop8cOBq/6a9c6a8b6f51911bf30560492dbe94fe/OCRS4FVS_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/40LorGm6rZCw072inAXJg/1aa99a3ea394db1846d0aeaed6be20cb/OCRS4FVS_hs_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1L7RU4I3gNZiDisXDA33gZ/9e910daa4d9d41195bcd8f0e3cdd4980/OCRS4FVS_lifestyle1.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1w2L8ksyVcGy0SGHBCvgXK/1ee8184c5908cbfcabe8e146e0a6096d/OCRS4FVS_lifestyle2.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
              {
                name: 'finish',
                value: {
                  key: 'Faded Sunburst',
                  label: 'Faded Sunburst',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'OCRS4FVSFSL',
              key: 'OCRS4FVSFSL',
              prices: [
                {
                  id: 'a2ccc383-0b4e-41b3-89c9-e6c4f394d325',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 249900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 224910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2oxQhASiSAdW2Hbo8fSojz/747da0393b444b1e6de0c275e16f135b/OCRS4FVS_front.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1Gd8S4mJi5HrYhzS9kxJOb/e46857bdd6215b2b303816a3ab0f96bd/OCRS4FVS_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6tyOafryZ0arR0Hin7ZCTy/554b11cfa98f22a64bf3491b8d895413/OCRS4FVS_side.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/23VuyXFVg4JJ0xIguol1Lp/2dc066c8412466e76d869572e443fbce/OCRS4FVS_beauty.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/fdBgR2eCo1MVO8Ts31tBm/2d1a924a465d1c90b7c04562bf90e99d/OCRS4FVS_pup.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2Qb06ErwU4KzxzPop8cOBq/6a9c6a8b6f51911bf30560492dbe94fe/OCRS4FVS_hs.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/40LorGm6rZCw072inAXJg/1aa99a3ea394db1846d0aeaed6be20cb/OCRS4FVS_hs_back.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1L7RU4I3gNZiDisXDA33gZ/9e910daa4d9d41195bcd8f0e3cdd4980/OCRS4FVS_lifestyle1.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1w2L8ksyVcGy0SGHBCvgXK/1ee8184c5908cbfcabe8e146e0a6096d/OCRS4FVS_lifestyle2.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
                {
                  name: 'finish',
                  value: {
                    key: 'Faded Sunburst',
                    label: 'Faded Sunburst',
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
      key: 'j-45-50s-faded',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      priceMode: 'Embedded',
      lastVariantId: 2,
    },
    {
      id: 'cc293549-6ed0-400e-b69f-509dfaa15253',
      version: 3,
      versionModifiedAt: '2023-08-30T07:42:31.892Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T07:41:39.933Z',
      lastModifiedAt: '2023-08-30T07:42:31.892Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': '50s J-45 Original',
          },
          description: {
            'en-US':
              'The new 50s J-45 Original model flaunts vintage-inspired detailing from the golden era of Gibson. Classic �Workhorse� materials include a Sitka Spruce top and Select Mahogany back and sides. The multi-ply top and single-ply back binding are subtly antiqued making each instrument look just like a seasoned Gibson acoustic. Appointed with cream button tuners, a 50s-era tortoise pick guard, and upgraded with an LR Baggs� VTC pickup for the best and most natural-sounding tone when amplified.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': '50s-j-45-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCSRX331ER',
            key: 'ACCSRX331ER',
            prices: [
              {
                id: '2b95158c-3ea5-4e8e-a759-eb31bb01221b',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6wT73EncEt6Hsb3uvS3iK4/5a5cdf7196afc241f5fd79e20d02e18b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/77OomnmtSgqhjKoueVuE6R/7c31949cdf2817795ef9bc81feb83a14/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6Dcxt7fLIkI4IYlATIziVL/4c775eb5886243f7153d70a76d9bb643/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1dAD1GVlcLSNJ1w6u1nznj/79a6e187086fd410896e7c0ad1110daf/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/38vWR3KfSUc9PywovWNuyv/1c0ded1cf021394bb9fd9aacb9880c6e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0EDG7VLwD9sBYbFWOEBCWF/4b2c71d942dc66fedb36ae750f9cbe52/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4YaYLvynzORB0VjDGFgM1C/547df10546734a4c4e3fb7680c75fbcb/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7mWIrX6lT5GVz9nemDigHC/f10892963161b48b39d846525b08b331/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4OqyrDnY2m7GJQwVr0z3np/e12691f1500b9bb777facc44cfad053a/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCSRX331EL',
              key: 'ACCSRX331EL',
              prices: [
                {
                  id: '5a8b159c-810a-44d0-a780-a736c3fbfa80',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6wT73EncEt6Hsb3uvS3iK4/5a5cdf7196afc241f5fd79e20d02e18b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/77OomnmtSgqhjKoueVuE6R/7c31949cdf2817795ef9bc81feb83a14/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6Dcxt7fLIkI4IYlATIziVL/4c775eb5886243f7153d70a76d9bb643/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1dAD1GVlcLSNJ1w6u1nznj/79a6e187086fd410896e7c0ad1110daf/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/38vWR3KfSUc9PywovWNuyv/1c0ded1cf021394bb9fd9aacb9880c6e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0EDG7VLwD9sBYbFWOEBCWF/4b2c71d942dc66fedb36ae750f9cbe52/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4YaYLvynzORB0VjDGFgM1C/547df10546734a4c4e3fb7680c75fbcb/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7mWIrX6lT5GVz9nemDigHC/f10892963161b48b39d846525b08b331/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4OqyrDnY2m7GJQwVr0z3np/e12691f1500b9bb777facc44cfad053a/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'OCRS4550VSVSR',
              key: 'OCRS4550VSVSR',
              prices: [
                {
                  id: '56a4d767-d67a-46c7-a968-18aaf223f849',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4aaNpfPo3dZHueWLng5kbn/3c80a25daa9faec29d4e3fa33878d06e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5jWgbEQaApQ40qgUiYWAAf/33883dbbc82002da7b5e5d96effc57dd/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KDjdutdrHzV0h0UBL22oL/36d19d4fcbb963e4122b7dc69c9d4a94/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6P2sMOV8A4t4ZWnylxyq2X/7f6963a3bef620979b9ddd065d58d271/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5N7qcA90unFPSVP43an3ir/776240a7269033f603e35270d35becd0/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hgHxjEl7SfxLBg0a05xAw/8f7f6154ec27f3edb427e04ab6f8762b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6p4VKpTghvkyQ3bX0o14DM/5a1506190cbc1623f492d88653383169/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4rfx2bkfnPeorWzDWtpOtv/0ff285720f9ee5377b06023856d422c4/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5QdcXcmnjzEg4onplR1kiM/f485b22654dbfedb3d17cfbccf27b7e6/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'OCRS4550VSVSL',
              key: 'OCRS4550VSVSL',
              prices: [
                {
                  id: '9912ac57-2ca6-455d-8597-3ce32e770e93',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4aaNpfPo3dZHueWLng5kbn/3c80a25daa9faec29d4e3fa33878d06e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5jWgbEQaApQ40qgUiYWAAf/33883dbbc82002da7b5e5d96effc57dd/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KDjdutdrHzV0h0UBL22oL/36d19d4fcbb963e4122b7dc69c9d4a94/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6P2sMOV8A4t4ZWnylxyq2X/7f6963a3bef620979b9ddd065d58d271/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5N7qcA90unFPSVP43an3ir/776240a7269033f603e35270d35becd0/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hgHxjEl7SfxLBg0a05xAw/8f7f6154ec27f3edb427e04ab6f8762b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6p4VKpTghvkyQ3bX0o14DM/5a1506190cbc1623f492d88653383169/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4rfx2bkfnPeorWzDWtpOtv/0ff285720f9ee5377b06023856d422c4/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5QdcXcmnjzEg4onplR1kiM/f485b22654dbfedb3d17cfbccf27b7e6/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
            'en-US': '50s J-45 Original',
          },
          description: {
            'en-US':
              'The new 50s J-45 Original model flaunts vintage-inspired detailing from the golden era of Gibson. Classic �Workhorse� materials include a Sitka Spruce top and Select Mahogany back and sides. The multi-ply top and single-ply back binding are subtly antiqued making each instrument look just like a seasoned Gibson acoustic. Appointed with cream button tuners, a 50s-era tortoise pick guard, and upgraded with an LR Baggs� VTC pickup for the best and most natural-sounding tone when amplified.',
          },
          categories: [
            {
              typeId: 'category',
              id: '2a340fd9-7a91-49fd-889f-829651f25fd4',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': '50s-j-45-original',
          },
          masterVariant: {
            id: 1,
            sku: 'ACCSRX331ER',
            key: 'ACCSRX331ER',
            prices: [
              {
                id: '2b95158c-3ea5-4e8e-a759-eb31bb01221b',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 299900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 269910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6wT73EncEt6Hsb3uvS3iK4/5a5cdf7196afc241f5fd79e20d02e18b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/77OomnmtSgqhjKoueVuE6R/7c31949cdf2817795ef9bc81feb83a14/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6Dcxt7fLIkI4IYlATIziVL/4c775eb5886243f7153d70a76d9bb643/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1dAD1GVlcLSNJ1w6u1nznj/79a6e187086fd410896e7c0ad1110daf/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/38vWR3KfSUc9PywovWNuyv/1c0ded1cf021394bb9fd9aacb9880c6e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0EDG7VLwD9sBYbFWOEBCWF/4b2c71d942dc66fedb36ae750f9cbe52/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4YaYLvynzORB0VjDGFgM1C/547df10546734a4c4e3fb7680c75fbcb/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7mWIrX6lT5GVz9nemDigHC/f10892963161b48b39d846525b08b331/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4OqyrDnY2m7GJQwVr0z3np/e12691f1500b9bb777facc44cfad053a/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'ACCSRX331EL',
              key: 'ACCSRX331EL',
              prices: [
                {
                  id: '5a8b159c-810a-44d0-a780-a736c3fbfa80',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6wT73EncEt6Hsb3uvS3iK4/5a5cdf7196afc241f5fd79e20d02e18b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/77OomnmtSgqhjKoueVuE6R/7c31949cdf2817795ef9bc81feb83a14/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6Dcxt7fLIkI4IYlATIziVL/4c775eb5886243f7153d70a76d9bb643/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_OCRS4550EB_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1dAD1GVlcLSNJ1w6u1nznj/79a6e187086fd410896e7c0ad1110daf/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/38vWR3KfSUc9PywovWNuyv/1c0ded1cf021394bb9fd9aacb9880c6e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0EDG7VLwD9sBYbFWOEBCWF/4b2c71d942dc66fedb36ae750f9cbe52/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4YaYLvynzORB0VjDGFgM1C/547df10546734a4c4e3fb7680c75fbcb/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7mWIrX6lT5GVz9nemDigHC/f10892963161b48b39d846525b08b331/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4OqyrDnY2m7GJQwVr0z3np/e12691f1500b9bb777facc44cfad053a/__static.gibson.com_product-images_Acoustic_ACCSRX331_Ebony_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Ebony',
                    label: 'Ebony',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'OCRS4550VSVSR',
              key: 'OCRS4550VSVSR',
              prices: [
                {
                  id: '56a4d767-d67a-46c7-a968-18aaf223f849',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4aaNpfPo3dZHueWLng5kbn/3c80a25daa9faec29d4e3fa33878d06e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5jWgbEQaApQ40qgUiYWAAf/33883dbbc82002da7b5e5d96effc57dd/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KDjdutdrHzV0h0UBL22oL/36d19d4fcbb963e4122b7dc69c9d4a94/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6P2sMOV8A4t4ZWnylxyq2X/7f6963a3bef620979b9ddd065d58d271/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5N7qcA90unFPSVP43an3ir/776240a7269033f603e35270d35becd0/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hgHxjEl7SfxLBg0a05xAw/8f7f6154ec27f3edb427e04ab6f8762b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6p4VKpTghvkyQ3bX0o14DM/5a1506190cbc1623f492d88653383169/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4rfx2bkfnPeorWzDWtpOtv/0ff285720f9ee5377b06023856d422c4/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5QdcXcmnjzEg4onplR1kiM/f485b22654dbfedb3d17cfbccf27b7e6/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 4,
              sku: 'OCRS4550VSVSL',
              key: 'OCRS4550VSVSL',
              prices: [
                {
                  id: '9912ac57-2ca6-455d-8597-3ce32e770e93',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 299900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 269910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4aaNpfPo3dZHueWLng5kbn/3c80a25daa9faec29d4e3fa33878d06e/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5jWgbEQaApQ40qgUiYWAAf/33883dbbc82002da7b5e5d96effc57dd/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6KDjdutdrHzV0h0UBL22oL/36d19d4fcbb963e4122b7dc69c9d4a94/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_OCRS4550VS_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6P2sMOV8A4t4ZWnylxyq2X/7f6963a3bef620979b9ddd065d58d271/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5N7qcA90unFPSVP43an3ir/776240a7269033f603e35270d35becd0/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2hgHxjEl7SfxLBg0a05xAw/8f7f6154ec27f3edb427e04ab6f8762b/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6p4VKpTghvkyQ3bX0o14DM/5a1506190cbc1623f492d88653383169/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4rfx2bkfnPeorWzDWtpOtv/0ff285720f9ee5377b06023856d422c4/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5QdcXcmnjzEg4onplR1kiM/f485b22654dbfedb3d17cfbccf27b7e6/__static.gibson.com_product-images_Acoustic_ACCSRX331_Vintage_Sunburst_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Vintage Sunburst',
                    label: 'Vintage Sunburst',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Left',
                    label: 'Left',
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
      key: '50s-j-45-original',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 4,
    },
    {
      id: '6c942c99-c1ca-416e-b8ce-b1544e718045',
      version: 3,
      versionModifiedAt: '2023-08-30T08:39:40.321Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T08:13:47.158Z',
      lastModifiedAt: '2023-08-30T08:39:40.321Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Rex Brown Signature Thunderbird',
          },
          description: {
            'en-US':
              'Multi-instrumentalist Rex Brown is well-known for his work with legendary metal bands Pantera and Down, and his hard-rocking solo album, Smoke on This� His new Gibson Rex Brown Signature Thunderbird� bass features a mahogany neck and body, and gold hardware with a Hipshot� bridge and tuners (including a Drop D Xtender�). A pair of powerful Rexbucker T-Bird pickups provide plenty of output and low-end punch. The master tone control is equipped with a push/pull switch that puts the pickups into passive mode when it is pulled out. Rex�s signature is reproduced on the truss rod cover, and the backplate is embellished with a Rex Brown doodle. A Modern Series hardshell case is also included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'rex-brown-signature-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BAT4RB00EBGH1ER',
            key: 'BAT4RB00EBGH1ER',
            prices: [
              {
                id: '1cbc2507-6cf1-4416-b09b-3f8b34dde19b',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/48BpKBdOg4LIPSXEPmuaLC/2071fbcb924e3a98c0180a8cced47291/BAT4RB00EBGH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5fqbAEKkka5zNpwuB1UTVz/f82644229f4f34c04a21810ea9bbcd28/BAT4RB00EBGH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7FUfAAvv9LV4UcNsNKylk1/36384193e86d71fd9fc2cc8845afcf14/BAT4RB00EBGH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5etNVgkdL6g8LuEyLyZkK/12feddbab6b3bc01b913f7532134d640/BAT4RB00EBGH1_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4zPr0XlwMvER6APCKmtstb/7f0e3e92a8b7e7a1fadddf09ea718e8d/BAT4RB00EBGH1_pups.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1ddIRV08fE4dezqh6Nkq5J/bab9e619ee43b8bdc0c3780eeada528f/BAT4RB00EBGH1_bridge.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/322qeh88CfYM89ziXpd18b/0856d8c5c4334281d785bd67c500118b/BAT4RB00EBGH1_hs_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5ABUFKZOU0REt0sWiNT9q2/df87cb4015a6cec60ffbf5d0814a3f98/BAT4RB00EBGH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US': 'Rex Brown Signature Thunderbird',
          },
          description: {
            'en-US':
              'Multi-instrumentalist Rex Brown is well-known for his work with legendary metal bands Pantera and Down, and his hard-rocking solo album, Smoke on This� His new Gibson Rex Brown Signature Thunderbird� bass features a mahogany neck and body, and gold hardware with a Hipshot� bridge and tuners (including a Drop D Xtender�). A pair of powerful Rexbucker T-Bird pickups provide plenty of output and low-end punch. The master tone control is equipped with a push/pull switch that puts the pickups into passive mode when it is pulled out. Rex�s signature is reproduced on the truss rod cover, and the backplate is embellished with a Rex Brown doodle. A Modern Series hardshell case is also included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'rex-brown-signature-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BAT4RB00EBGH1ER',
            key: 'BAT4RB00EBGH1ER',
            prices: [
              {
                id: '1cbc2507-6cf1-4416-b09b-3f8b34dde19b',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/48BpKBdOg4LIPSXEPmuaLC/2071fbcb924e3a98c0180a8cced47291/BAT4RB00EBGH1_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5fqbAEKkka5zNpwuB1UTVz/f82644229f4f34c04a21810ea9bbcd28/BAT4RB00EBGH1_back.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7FUfAAvv9LV4UcNsNKylk1/36384193e86d71fd9fc2cc8845afcf14/BAT4RB00EBGH1_side.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5etNVgkdL6g8LuEyLyZkK/12feddbab6b3bc01b913f7532134d640/BAT4RB00EBGH1_beauty.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4zPr0XlwMvER6APCKmtstb/7f0e3e92a8b7e7a1fadddf09ea718e8d/BAT4RB00EBGH1_pups.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1ddIRV08fE4dezqh6Nkq5J/bab9e619ee43b8bdc0c3780eeada528f/BAT4RB00EBGH1_bridge.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/322qeh88CfYM89ziXpd18b/0856d8c5c4334281d785bd67c500118b/BAT4RB00EBGH1_hs_front.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5ABUFKZOU0REt0sWiNT9q2/df87cb4015a6cec60ffbf5d0814a3f98/BAT4RB00EBGH1_hs.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: 'rex-brown-signature-thunderbird',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 1,
    },
    {
      id: '59fb2797-5cfc-478f-a45a-19d9c448f975',
      version: 3,
      versionModifiedAt: '2023-08-30T08:39:40.845Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T08:13:47.184Z',
      lastModifiedAt: '2023-08-30T08:39:40.845Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Non-Reverse Thunderbird',
          },
          description: {
            'en-US':
              "Ever since it was first released back in 1965, the Non-Reverse Thunderbird has been THE choice for forward-looking bassists who want to make their own path and steadfastly refuse to follow the crowd. The Non-Reverse Thunderbird's distinctive styling and huge, thunderous tone make it a standout on stage and in the studio. Now you have the opportunity to make one of these relatively rare 'birds your own with the release of the new Gibson USA Non-Reverse Thunderbird. Equipped with a Non-Reverse mahogany body and mahogany neck with a rosewood fretboard and 20 medium jumbo frets, each of the two Thunderbird pickups has a volume control, allowing you to use them separately, or to blend them in any amount you prefer. A master tone control rounds out the simple yet highly effective control layout. The three-ply white pickguard features the iconic Thunderbird graphic. The Non-Reverse Thunderbird is equipped with a Graph Tech� nut. A 3-point adjustable bridge provides a full range of adjustment for action and intonation, while Hipshot� Ultralite� tuning machines hold down the strings at the other end and deliver accurate and stable tuning while keeping headstock weight low to improve balance. Available in Inverness Green, Faded Pelham Blue, and Sparkling Burgundy, a hardshell case is included. ",
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'non-reverse-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BANT00IGCH1IGR',
            key: 'BANT00IGCH1IGR',
            prices: [
              {
                id: 'f5d27413-859f-4896-970f-ba63f5ca3aa0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 239900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 215910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5AuHYXrV3q4rlUiNhiORbL/a684670e1ae6f3a6192391fd73788c69/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/26vhwGXtCWxSCa6Ijadmn0/97a091915818abc76981c82f4bba6788/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0L6ViMFnrTIC3dvqpe8uRG/4f74ebfeef620cd018d9f88259e1327f/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0RDvEauqdKJ1C07zG1yU7R/d06f5f47cf03c976be375fe1d0a34246/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2I1h5dTlqaVaY0HJrMpvKR/bd753d0ebdde791179dc83013581a38c/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7BzHAtiV0LNRMqeElIqQOR/52584683692ef230fc62a43a2df520d9/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4tetR33jc79qDjdYDyQ8KA/ca21eddc2bd90e20216603b71c9fe359/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0xGHEaxa3udnZHgWaDJFV6/8e142c963513186d3ead5e03a2664597/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6emM8CknmDYVoDc1nsjNt9/ec8fc1d8bbe6d54864596e86372090c1/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USA7EU389FPBR',
              key: 'USA7EU389FPBR',
              prices: [
                {
                  id: '712d3c8f-b0c1-46e9-ad7b-bbe4ed1c79f3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 239900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 215910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4BV1gMHe0k4voH3NGyMYOD/5c6692d5f677007d2d9a07e04ef42625/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WMA1sWPTf9hZSIXtkisjr/5cbf1a197d16bf93ff383350aeab9f19/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2eiHVwfPwCPaNbMj72y3Hv/bceda55f94e75a523772f5f56a44cf87/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bgG0enc1Wm5KbrzEb02aQ/c31aa75a34e22e2fc384a05abfbe7870/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/44HR1RcNLNzb97u5KYVeHv/2d8b2a2140fb8b7b6f9b07fd70fd54a0/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2KBDIEld4CTiZTAtWEAxBD/e6b67f62b8ac030c56d5fcfc26bcbb6f/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7apzXrJ6oAtEv4KM6dDPun/61001d11b3e4d1eae7a5964fb546eb48/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1BaZlU92jMRQGGKdvqrBK4/216c942f43f882787c451584685e66e8/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0fIiagYFlcdA7jdWDLzdKN/b6327e83407d86493abfd75b23d188df/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'BANT00VNCH1SBR',
              key: 'BANT00VNCH1SBR',
              prices: [
                {
                  id: 'a122714f-bdc4-4a80-80e9-ae4e9b271599',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 239900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 215910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Yn6OrXbxrRwAsKTdh3UMh/f50d68a67b5ae7bd70e5568eed24f93c/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0a087tVBiFtj1mzL2YaiDj/691d21fa0c400bf38fddf86f43e67fe2/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3HLBfHUSiixILau2JX33cX/9175822528cd013e2c38f851a56949a8/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5aL0CrERLrPrQGaZaV9jOk/bae20691f25c71c6d87f3c2344b13157/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4oJ6IPSsIVwOCM2dggYTfz/910cf63aabf79eeadd37bb29e971ab1b/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6yvh6is2tBblxS1OwTZp99/12b2e2821175b8f976eb14d8a3ec796e/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4d2LpLfy7G8dDfExGeqEiT/7dee162699be47567b0bce75cbcdfdb7/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4F5iSF7ZTGp2HkuIDxw8Tq/b6c569861397250a1df0066e04a2be52/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7kdqSMhxgjz3tTHmUUtid1/066aace14e299c4d71862e1d1610ec72/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Sparkling Burgundy',
                    label: 'Sparkling Burgundy',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
            'en-US': 'Non-Reverse Thunderbird',
          },
          description: {
            'en-US':
              "Ever since it was first released back in 1965, the Non-Reverse Thunderbird has been THE choice for forward-looking bassists who want to make their own path and steadfastly refuse to follow the crowd. The Non-Reverse Thunderbird's distinctive styling and huge, thunderous tone make it a standout on stage and in the studio. Now you have the opportunity to make one of these relatively rare 'birds your own with the release of the new Gibson USA Non-Reverse Thunderbird. Equipped with a Non-Reverse mahogany body and mahogany neck with a rosewood fretboard and 20 medium jumbo frets, each of the two Thunderbird pickups has a volume control, allowing you to use them separately, or to blend them in any amount you prefer. A master tone control rounds out the simple yet highly effective control layout. The three-ply white pickguard features the iconic Thunderbird graphic. The Non-Reverse Thunderbird is equipped with a Graph Tech� nut. A 3-point adjustable bridge provides a full range of adjustment for action and intonation, while Hipshot� Ultralite� tuning machines hold down the strings at the other end and deliver accurate and stable tuning while keeping headstock weight low to improve balance. Available in Inverness Green, Faded Pelham Blue, and Sparkling Burgundy, a hardshell case is included. ",
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'non-reverse-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BANT00IGCH1IGR',
            key: 'BANT00IGCH1IGR',
            prices: [
              {
                id: 'f5d27413-859f-4896-970f-ba63f5ca3aa0',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 239900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 215910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5AuHYXrV3q4rlUiNhiORbL/a684670e1ae6f3a6192391fd73788c69/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/26vhwGXtCWxSCa6Ijadmn0/97a091915818abc76981c82f4bba6788/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0L6ViMFnrTIC3dvqpe8uRG/4f74ebfeef620cd018d9f88259e1327f/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_BANT00IGCH1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0RDvEauqdKJ1C07zG1yU7R/d06f5f47cf03c976be375fe1d0a34246/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/2I1h5dTlqaVaY0HJrMpvKR/bd753d0ebdde791179dc83013581a38c/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/7BzHAtiV0LNRMqeElIqQOR/52584683692ef230fc62a43a2df520d9/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4tetR33jc79qDjdYDyQ8KA/ca21eddc2bd90e20216603b71c9fe359/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0xGHEaxa3udnZHgWaDJFV6/8e142c963513186d3ead5e03a2664597/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6emM8CknmDYVoDc1nsjNt9/ec8fc1d8bbe6d54864596e86372090c1/__static.gibson.com_product-images_USA_USA7EU389_Inverness_Green_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Inverness Green',
                  label: 'Inverness Green',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [
            {
              id: 2,
              sku: 'USA7EU389FPBR',
              key: 'USA7EU389FPBR',
              prices: [
                {
                  id: '712d3c8f-b0c1-46e9-ad7b-bbe4ed1c79f3',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 239900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 215910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4BV1gMHe0k4voH3NGyMYOD/5c6692d5f677007d2d9a07e04ef42625/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1WMA1sWPTf9hZSIXtkisjr/5cbf1a197d16bf93ff383350aeab9f19/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2eiHVwfPwCPaNbMj72y3Hv/bceda55f94e75a523772f5f56a44cf87/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_BANT00FPCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3bgG0enc1Wm5KbrzEb02aQ/c31aa75a34e22e2fc384a05abfbe7870/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/44HR1RcNLNzb97u5KYVeHv/2d8b2a2140fb8b7b6f9b07fd70fd54a0/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/2KBDIEld4CTiZTAtWEAxBD/e6b67f62b8ac030c56d5fcfc26bcbb6f/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7apzXrJ6oAtEv4KM6dDPun/61001d11b3e4d1eae7a5964fb546eb48/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/1BaZlU92jMRQGGKdvqrBK4/216c942f43f882787c451584685e66e8/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0fIiagYFlcdA7jdWDLzdKN/b6327e83407d86493abfd75b23d188df/__static.gibson.com_product-images_USA_USA7EU389_Faded_Pelham_Blue_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
                  },
                },
              ],
              assets: [],
            },
            {
              id: 3,
              sku: 'BANT00VNCH1SBR',
              key: 'BANT00VNCH1SBR',
              prices: [
                {
                  id: 'a122714f-bdc4-4a80-80e9-ae4e9b271599',
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 239900,
                    fractionDigits: 2,
                  },
                  country: 'US',
                  discounted: {
                    value: {
                      type: 'centPrecision',
                      currencyCode: 'USD',
                      centAmount: 215910,
                      fractionDigits: 2,
                    },
                    discount: {
                      typeId: 'product-discount',
                      id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                    },
                  },
                },
              ],
              images: [
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5Yn6OrXbxrRwAsKTdh3UMh/f50d68a67b5ae7bd70e5568eed24f93c/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_front.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/0a087tVBiFtj1mzL2YaiDj/691d21fa0c400bf38fddf86f43e67fe2/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_back.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/3HLBfHUSiixILau2JX33cX/9175822528cd013e2c38f851a56949a8/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_BANT00VNCH1_side.jpg',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/5aL0CrERLrPrQGaZaV9jOk/bae20691f25c71c6d87f3c2344b13157/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_hardware-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4oJ6IPSsIVwOCM2dggYTfz/910cf63aabf79eeadd37bb29e971ab1b/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_neck-side-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/6yvh6is2tBblxS1OwTZp99/12b2e2821175b8f976eb14d8a3ec796e/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_back-neck-500_500.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4d2LpLfy7G8dDfExGeqEiT/7dee162699be47567b0bce75cbcdfdb7/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_front-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/4F5iSF7ZTGp2HkuIDxw8Tq/b6c569861397250a1df0066e04a2be52/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_side-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
                {
                  url: 'https://images.ctfassets.net/m8onsx4mm13s/7kdqSMhxgjz3tTHmUUtid1/066aace14e299c4d71862e1d1610ec72/__static.gibson.com_product-images_USA_USA7EU389_Sparkling_Burgundy_back-banner-640_480.png',
                  label: '',
                  dimensions: {
                    w: 0,
                    h: 0,
                  },
                },
              ],
              attributes: [
                {
                  name: 'finish',
                  value: {
                    key: 'Sparkling Burgundy',
                    label: 'Sparkling Burgundy',
                  },
                },
                {
                  name: 'handedness',
                  value: {
                    key: 'Right',
                    label: 'Right',
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
      key: 'non-reverse-thunderbird',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 3,
    },
    {
      id: '517ac9de-4d33-4b47-b65f-c39d4cc37972',
      version: 3,
      versionModifiedAt: '2023-08-30T08:39:40.679Z',
      lastMessageSequenceNumber: 3,
      createdAt: '2023-08-30T08:13:47.210Z',
      lastModifiedAt: '2023-08-30T08:39:40.679Z',
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
        id: 'c9e8c578-2cdf-42a6-a455-17080cbcebfb',
      },
      masterData: {
        current: {
          name: {
            'en-US': 'Gene Simmons G2 Thunderbird',
          },
          description: {
            'en-US':
              'Gene Simmons is a legendary rock icon and the bassist from KISS, and his new Gibson Gene Simmons G2 Thunderbird Bass reflects his tastes. Designed to meet the musical needs of modern bassists, it features the classic Reverse Thunderbird� body and headstock shape. The G2 Thunderbird Bass is voiced with a pair of powerful T-Bird pickups, each with individual Volume controls and paired with a master Tone control. The bound ebony fretboard features pearloid reverse split diamond inlays. A Graph Tech� nut and Hipshot� Mini Clover tuners keep the tuning rock-solid, while the other end of the strings anchor to a Hipshot� Bass Bridge. The back of the headstock features a G2 logo. The Ebony nitrocellulose lacquer finish is paired with Black Chrome hardware and a Mirror Plex truss rod cover and Mirror Plex pickguard with a laser engraved custom Gene Simmons logo. A modern hardshell case is included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'gene-simmons-g2-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BAT4GSM00EBBC1ER',
            key: 'BAT4GSM00EBBC1ER',
            prices: [
              {
                id: 'f05afc19-7e7d-457f-a69b-7f63cd38dc02',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6wpq8lU2VfWlE4EYfmXWAF/dfd9ded55d8c4ed7b988858fdc6450e8/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3imCjv0JsUxnwoNDza7L6A/13c4a10d040c1706f5e9e4a6307299e1/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6kxZXycrwTFRZZryifa4tr/dc67d48682b32bc5aea338edb208c4cc/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0OhHPTzFca8siBaJcd5oGs/0681d7350c749f7953691e50b6d05863/__static.gibson.com_product-images_USA_USAKRR84_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ynsz6jtwJDpiAuX2GHEUt/cd3a1fc269a5c67fb57a0b6638fbb896/__static.gibson.com_product-images_USA_USAKRR84_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4rFWnxGLfPzp0ZzGQdgMup/c474cad3c076794c266bfdab63f9a22e/__static.gibson.com_product-images_USA_USAKRR84_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1U76rKce611XepRBTYn6yq/396d91789901edbf7e120a298a100fdc/__static.gibson.com_product-images_USA_USAKRR84_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6rZuBqMxMGNi5Gucg65RRj/0e48344b530528cba56e023864a79c0a/__static.gibson.com_product-images_USA_USAKRR84_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6dPfSfI22hqrdVY4Sk9lGf/9640af2a89f52a1be3d379749b238ad4/__static.gibson.com_product-images_USA_USAKRR84_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/44w5Xzb9TOWvXVWE9ljelu/09027613bcdc8fc40f9532d576af69c5/__static.gibson.com_product-images_USA_USAKRR84_Ebony_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4dAUHIKZ0MAyV76BjnnFdF/d62d97c36e1cc71de7cbe0576cde68b7/__static.gibson.com_product-images_USA_USAKRR84_Ebony_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5CYNA2nkp8m53pjXTol4qG/fdafeee880f2449a6e327316adf69ee3/__static.gibson.com_product-images_USA_USAKRR84_Ebony_head-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/25ksvKEcKGVXHkQwCnOsmp/76f89c084f9b46593dc6f4d60b678672/__static.gibson.com_product-images_USA_USAKRR84_Ebony_head-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        staged: {
          name: {
            'en-US': 'Gene Simmons G2 Thunderbird',
          },
          description: {
            'en-US':
              'Gene Simmons is a legendary rock icon and the bassist from KISS, and his new Gibson Gene Simmons G2 Thunderbird Bass reflects his tastes. Designed to meet the musical needs of modern bassists, it features the classic Reverse Thunderbird� body and headstock shape. The G2 Thunderbird Bass is voiced with a pair of powerful T-Bird pickups, each with individual Volume controls and paired with a master Tone control. The bound ebony fretboard features pearloid reverse split diamond inlays. A Graph Tech� nut and Hipshot� Mini Clover tuners keep the tuning rock-solid, while the other end of the strings anchor to a Hipshot� Bass Bridge. The back of the headstock features a G2 logo. The Ebony nitrocellulose lacquer finish is paired with Black Chrome hardware and a Mirror Plex truss rod cover and Mirror Plex pickguard with a laser engraved custom Gene Simmons logo. A modern hardshell case is included.',
          },
          categories: [
            {
              typeId: 'category',
              id: 'd85eaf0f-e4bc-46de-9efd-ae12d59341cd',
            },
          ],
          categoryOrderHints: {},
          slug: {
            'en-US': 'gene-simmons-g2-thunderbird',
          },
          masterVariant: {
            id: 1,
            sku: 'BAT4GSM00EBBC1ER',
            key: 'BAT4GSM00EBBC1ER',
            prices: [
              {
                id: 'f05afc19-7e7d-457f-a69b-7f63cd38dc02',
                value: {
                  type: 'centPrecision',
                  currencyCode: 'USD',
                  centAmount: 279900,
                  fractionDigits: 2,
                },
                country: 'US',
                discounted: {
                  value: {
                    type: 'centPrecision',
                    currencyCode: 'USD',
                    centAmount: 251910,
                    fractionDigits: 2,
                  },
                  discount: {
                    typeId: 'product-discount',
                    id: 'fdd01f58-7e15-4d88-936b-3448c942e8ae',
                  },
                },
              },
            ],
            images: [
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6wpq8lU2VfWlE4EYfmXWAF/dfd9ded55d8c4ed7b988858fdc6450e8/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_front.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/3imCjv0JsUxnwoNDza7L6A/13c4a10d040c1706f5e9e4a6307299e1/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_back.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6kxZXycrwTFRZZryifa4tr/dc67d48682b32bc5aea338edb208c4cc/__static.gibson.com_product-images_USA_USAKRR84_Ebony_BAT4GSM00EBBC1_side.jpg',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/0OhHPTzFca8siBaJcd5oGs/0681d7350c749f7953691e50b6d05863/__static.gibson.com_product-images_USA_USAKRR84_Ebony_hardware-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6ynsz6jtwJDpiAuX2GHEUt/cd3a1fc269a5c67fb57a0b6638fbb896/__static.gibson.com_product-images_USA_USAKRR84_Ebony_neck-side-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4rFWnxGLfPzp0ZzGQdgMup/c474cad3c076794c266bfdab63f9a22e/__static.gibson.com_product-images_USA_USAKRR84_Ebony_back-neck-500_500.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/1U76rKce611XepRBTYn6yq/396d91789901edbf7e120a298a100fdc/__static.gibson.com_product-images_USA_USAKRR84_Ebony_front-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6rZuBqMxMGNi5Gucg65RRj/0e48344b530528cba56e023864a79c0a/__static.gibson.com_product-images_USA_USAKRR84_Ebony_side-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/6dPfSfI22hqrdVY4Sk9lGf/9640af2a89f52a1be3d379749b238ad4/__static.gibson.com_product-images_USA_USAKRR84_Ebony_back-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/44w5Xzb9TOWvXVWE9ljelu/09027613bcdc8fc40f9532d576af69c5/__static.gibson.com_product-images_USA_USAKRR84_Ebony_beauty-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/4dAUHIKZ0MAyV76BjnnFdF/d62d97c36e1cc71de7cbe0576cde68b7/__static.gibson.com_product-images_USA_USAKRR84_Ebony_beauty-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/5CYNA2nkp8m53pjXTol4qG/fdafeee880f2449a6e327316adf69ee3/__static.gibson.com_product-images_USA_USAKRR84_Ebony_head-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
              {
                url: 'https://images.ctfassets.net/m8onsx4mm13s/25ksvKEcKGVXHkQwCnOsmp/76f89c084f9b46593dc6f4d60b678672/__static.gibson.com_product-images_USA_USAKRR84_Ebony_head-banner-640_480.png',
                label: '',
                dimensions: {
                  w: 0,
                  h: 0,
                },
              },
            ],
            attributes: [
              {
                name: 'finish',
                value: {
                  key: 'Ebony',
                  label: 'Ebony',
                },
              },
              {
                name: 'handedness',
                value: {
                  key: 'Right',
                  label: 'Right',
                },
              },
            ],
            assets: [],
          },
          variants: [],
          searchKeywords: {},
        },
        published: true,
        hasStagedChanges: false,
      },
      key: 'gene-simmons-g2-thunderbird',
      taxCategory: {
        typeId: 'tax-category',
        id: '33d6a0c5-9459-405d-aa96-59fa510b3507',
      },
      lastVariantId: 1,
    },
  ],
};
