import { ReactElement, useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectCartState } from '../../store/slices/cartSlice';
import CartController from '../../api/controllers/CartController';
import { CartItem } from '../../api/types';

function cart(): ReactElement {
  const [displayCartItems, setDisplayCartItems] = useState<CartItem[]>([]);

  const { cartId, cartItems } = useAppSelector(selectCartState);

  useEffect(() => {
    // setcartItems([]);
    const cartController = new CartController();

    if (cartId) {
      cartController
        .getCart()
        .then((response) => {
          console.log(response);
          console.log('get cart was successful');
          setDisplayCartItems(response.lineItems);
        })
        .catch(() => {
          console.log('error in getting cart');
        });
    }
  }, [cartItems]);

  return (
    <>
      <h1 className="text-white">cart</h1>
      <main>{!displayCartItems.length && <div>No items in cart</div>}</main>
    </>
  );
}

export default cart;
