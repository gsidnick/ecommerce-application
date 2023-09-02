import React, { ReactElement } from 'react';
import { GetServerSideProps } from 'next';
import { ProductProjection, ProductVariant } from '@commercetools/platform-sdk';
import ProductController from '@/api/controllers/ProductController';
import ProductDetail from '@/components/ProductDetail';
import ProductSlider from '@/components/ProductSlider';
import styles from './styles.module.css';

const MAIN_VARIANT_ID = 1;
interface ProductProps {
  product: ProductProjection;
}

const ProductPage = ({ product }: ProductProps): ReactElement => {
  const currentVariant = 1;
  const details = {
    name: product.name['en-US'],
    description: product.description ? product.description['en-US'] : '',
  };
  let variant: ProductVariant;

  if (currentVariant === MAIN_VARIANT_ID) {
    variant = product.masterVariant;
  } else {
    [variant] = product.variants.filter((item) => item.id === currentVariant);
  }

  const images = variant.images ? variant.images.map((item) => item.url) : [];

  return (
    <section className={styles.productdetail}>
      <div className={styles.container}>
        <div className="grid grid-cols-2 gap-4">
          <ProductSlider images={images} />
          <ProductDetail details={details} />
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
