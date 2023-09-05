import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { ProductProjection, ProductVariant } from '@commercetools/platform-sdk';
import ProductController from '@/api/controllers/ProductController';
import ProductDetail from '@/components/ProductDetail';
import ProductSlider from '@/components/ProductSlider';
import styles from './styles.module.css';

const MAIN_VARIANT_ID = 1;
const FIRST_ELEMENT = 0;
const HANDRED = 100;

interface ProductProps {
  product: ProductProjection;
}

interface Brand {
  key: string;
  label: string;
}

const ProductPage = ({ product }: ProductProps): ReactElement => {
  const currentVariant = 1;
  const details = {
    name: product.name['en-US'],
    description: product.description ? product.description['en-US'] : '',
    brand: '',
    price: 0,
    discount: 0,
  };
  let variant: ProductVariant;

  if (currentVariant === MAIN_VARIANT_ID) {
    variant = product.masterVariant;
  } else {
    [variant] = product.variants.filter((item) => item.id === currentVariant);
  }

  const images = variant.images ? variant.images.map((item) => item.url) : [];

  if (variant.prices) {
    details.price = variant.prices[FIRST_ELEMENT].value.centAmount / HANDRED;
    if (variant.prices[FIRST_ELEMENT].discounted) {
      details.discount =
        variant.prices[FIRST_ELEMENT].discounted.value.centAmount / HANDRED;
    }
  }

  if (variant.attributes) {
    const [brand] = variant.attributes.filter((item) => item.name === 'brand');
    const value = brand.value as Brand;
    details.brand = value.label;
  }
  return (
    <section className={styles.productdetail}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.slider}>
            <ProductSlider images={images} />
          </div>
          <div className={styles.details}>
            <ProductDetail details={details} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps<ProductProps> = async (
  context
) => {
  const productID = context.params?.id as string;
  const productController = new ProductController();
  try {
    const response = await productController.getProduct(productID);
    const product = response.body;
    if (!product) throw new Error('Product Not Found');
    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
