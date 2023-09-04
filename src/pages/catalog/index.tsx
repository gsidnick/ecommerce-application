import { ReactElement, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import SideBar from '../../components/SideBar';
import FilterPanelContainer from '@/components/FilterPanelContainer';
import SortButtonsPanel from '@/components/SortButtonsPanel';
import FilteredProductContainer from '@/components/FilteredProductContainer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  getFilteredProducts,
  getAllFilteredProductsWithoutLimit,
  selectFilterState,
} from '@/store/slices/filterSlice';
import { getAllCategories } from '@/store/slices/productsSlice';
import styles from './styles.module.css';
import { DEFAULT_LIMIT } from '@/api/constants';
import { extractAllBrands } from '@/helpers/productsHelpers';

// import { data } from './dataProducts';

// function Catalog({
//   res,
// }: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
function Catalog(): ReactElement {
  const dispatch = useAppDispatch();
  const { filteredProducts, totalFilteredProducts, filterCategory, filteredAllProducts } =
    useAppSelector(selectFilterState);
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = (): void => {
      dispatch(getFilteredProducts({}));
    };
    const fetchCategories = (): void => {
      dispatch(getAllCategories({}));
    };

    const fetchAllProductsWithoutLimit = (): void => {
      dispatch(getAllFilteredProductsWithoutLimit({}));
    };
    const brandsArr = extractAllBrands(filteredAllProducts);

    fetchCategories();
    fetchProducts();
    fetchAllProductsWithoutLimit();
    setBrands(brandsArr);
  }, []);

  useEffect(() => {
    dispatch(getFilteredProducts({}));
    dispatch(getAllFilteredProductsWithoutLimit({}));
    const brandsArr = extractAllBrands(filteredAllProducts);
    setBrands(brandsArr);
  }, [filterCategory]);

  return (
    <div className="flex justify-between ">
      <div>
        <SideBar className="w-72 flex-none" />
        <div className={`${styles.filterPanelWrapper} text-white`}>
          <FilterPanelContainer
            filteredProducts={filteredProducts}
            filteredBrands={brands}
          />
        </div>
      </div>
      <div className="mb-8 flex flex-1 flex-wrap justify-between gap-2 px-5">
        <div className="flex-1">
          <SortButtonsPanel productsCount={totalFilteredProducts} />
          <FilteredProductContainer
            filteredProducts={filteredProducts}
            itemsPerPage={DEFAULT_LIMIT}
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
