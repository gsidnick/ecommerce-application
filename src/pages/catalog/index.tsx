import { ReactElement, useEffect } from 'react';
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { ClientResponse } from '@commercetools/sdk-client-v2';
import // ProductProjection,
// ProductProjectionPagedQueryResponse,
'@commercetools/platform-sdk';
import { categoriesList } from './categoriesData';
import SideBar from '../../components/SideBar';
import FilterPanelContainer from '@/components/FilterPanelContainer';
import SortButtonsPanel from '@/components/SortButtonsPanel';
import FilteredProductContainer from '@/components/FilteredProductContainer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  getFilteredProducts,
  selectFilterState,
} from '@/store/slices/filterSlice';
// import ProductController from '@/api/controllers/ProductController';
import styles from './styles.module.css';

// import { data } from './dataProducts';

// function Catalog({
//   res,
// }: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
function Catalog(): ReactElement {
  const dispatch = useAppDispatch();
  const { filteredProducts, totalFilteredProducts } = useAppSelector(selectFilterState);

  console.log('filteredProducts', filteredProducts);

  useEffect(() => {
    const fetchProducts = (): void => {
      dispatch(getFilteredProducts());
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex justify-between ">
      <div>
        <SideBar categoriesList={categoriesList} className="w-72 flex-none" />
        <div className={`${styles.filterPanelWrapper} text-white`}>
          <FilterPanelContainer />
        </div>
      </div>
      <div className="mb-8 flex flex-1 flex-wrap justify-between gap-2 px-5">
        <div className="flex-1">
          <SortButtonsPanel productsCount={totalFilteredProducts} />
          <FilteredProductContainer
            filteredProducts={filteredProducts}
            itemsPerPage={15}
          />
        </div>
      </div>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps<
//   ClientResponse<ProductProjectionPagedQueryResponse>
// > = async () => {
//   const productController = new ProductController();
//   const res = await productController.getProducts();

//   return { props: { res } };
// };

export default Catalog;
