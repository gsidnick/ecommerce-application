import React, { ReactElement, useEffect, useState } from 'react';
import { ProductVariant } from '@commercetools/platform-sdk';
import { useRouter } from 'next/router';
import ProductController from '@/api/controllers/ProductController';
import ProductDetail from '@/components/ProductDetail';
import { MAIN_VARIANT_ID } from '@/components/ProductCard/constants';
import ProductSlider from '@/components/ProductSlider';
import Loading from '@/components/Loading';
import styles from './styles.module.css';

const FIRST_ELEMENT = 0;
const PRODUCT_KEY_PATH_INDEX = 0;
const PRODUCT_VARIANT_PATH_INDEX = 1;
const HANDRED = 100;

const ProductPage = (): ReactElement => {
  const productController = new ProductController();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<string[] | null>(null);
  const [details, setDetails] = useState({
    name: '',
    description: '',
    price: 0,
    discount: 0,
    id: '',
  });
  const router = useRouter();
  const { isReady } = router;
  const { key = [] } = router.query;
  const currentVariant = key[PRODUCT_VARIANT_PATH_INDEX]
    ? Number(key[PRODUCT_VARIANT_PATH_INDEX])
    : MAIN_VARIANT_ID;

  useEffect(() => {
    if (
      isReady &&
      key[PRODUCT_KEY_PATH_INDEX] &&
      typeof key[PRODUCT_KEY_PATH_INDEX] === 'string'
    ) {
      productController
        .getProductByKey(key[PRODUCT_KEY_PATH_INDEX])
        .then((response) => {
          const product = response.body;

          if (product) {
            const { id } = product;
            const name = product.name['en-US'];
            const description = product.description
              ? product.description['en-US']
              : '';

            let variant: ProductVariant;
            if (currentVariant === MAIN_VARIANT_ID) {
              variant = product.masterVariant;
            } else {
              [variant] = product.variants.filter(
                (item) => item.id === currentVariant
              );
            }

            let price = 0;
            let discount = 0;
            if (variant.prices) {
              price = variant.prices[FIRST_ELEMENT].value.centAmount / HANDRED;
              if (variant.prices[FIRST_ELEMENT].discounted) {
                discount =
                  variant.prices[FIRST_ELEMENT].discounted.value.centAmount /
                  HANDRED;
              }
            }

            const variantImages = variant.images
              ? variant.images.map((item) => item.url)
              : null;

            setImages(variantImages);

            setDetails({
              name,
              description,
              price,
              discount,
              id,
            });

            setLoading(false);
          }
        })
        .catch(() => {
          void router.push('/404');
        });
    }
  }, [isReady, key[PRODUCT_KEY_PATH_INDEX]]);

  return (
    <section className={styles.productdetail}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <>
              <div className={styles.slider}>
                <ProductSlider images={images} />
              </div>
              <div className={styles.details}>
                <ProductDetail details={details} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
