import { ReactElement, useEffect, useState } from 'react';
import { BasketItem } from '../../api/types';

function Basket(): ReactElement {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    setBasketItems([]);
  }, []);

  return (
    <>
      <h1 className="text-white">Basket</h1>
      <main>{!basketItems.length && <div>No items in basket</div>}</main>
    </>
  );
}

export default Basket;
