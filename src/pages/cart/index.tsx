import { FormEvent, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { LineItem } from '@commercetools/platform-sdk';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import Link from 'next/link';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import {
  getCartId,
  getCartProducts,
  getCartTotal,
  getPromoCode,
  setPromocode,
  updateCart,
  updateProductInCart,
} from '../../store/slices/cartSlice';
import CartController from '../../api/controllers/CartController';
import { CartItem, HttpStatus } from '../../api/types';
import TrashIcon from '@/assets/images/trash-can.svg';
import { ERoute } from '../../data/routes';
import { ZERO_INDEX } from '../../components/FilteredProductContainer/constants';
import ModalPrompt from '../../components/ModalPrompt';

const EMPTY_CART_ITEMS = 0;
const ZERO = 0;
const CENTS_IN_DOLLAR = 100;
const CART_STEP = 1;
const DISCOUNT_DIFF = 0.5;
const FRACTION_DIGITS = 2;

function cart(): ReactElement {
  const [displayCartItems, setDisplayCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(ZERO);
  const [cartTotalWithoutDiscount, setcartTotalWithoutDiscount] =
    useState(ZERO);

  const [cartProductsQty, setCartProductsQty] = useState(ZERO);
  const [activePromocode, setActivePromocode] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const [isDisabledModifyButtons, setIsDisabledModifyButtons] =
    useState<boolean>();

  const userCartProducts = useAppSelector(getCartProducts);
  const userCartTotal = useAppSelector(getCartTotal);
  const storeActivePromocode = useAppSelector(getPromoCode);
  const activeCartId = useAppSelector(getCartId);

  const [isDisabledPromoInput, setIsDisabledPromoInput] = useState<boolean>(
    !!storeActivePromocode
  );

  const cartController = new CartController();

  useEffect(() => {
    if (userCartProducts.length >= EMPTY_CART_ITEMS) {
      setCartProductsQty(
        userCartProducts.reduce(
          (acc, value) => acc + value.quantity,
          EMPTY_CART_ITEMS
        )
      );

      if (activeCartId.length > ZERO) {
        cartController
          .getCart()
          .then(() => {
            setDisplayCartItems(userCartProducts);
          })
          .catch(() => {
            console.log('error in getting cart');
          });
      }
    }
  }, [userCartProducts]);

  useEffect(() => {
    const getApiCartTotal = async (): Promise<void> => {
      try {
        if (activeCartId.length > ZERO) {
          const response = await cartController.getTotalPrice();

          setCartTotal(response);
        }
      } catch {
        console.log('No cart');
      }
    };

    const getApiTotalWithoutDiscount = async (): Promise<void> => {
      try {
        if (activeCartId.length > ZERO) {
          const response = await cartController.getOriginalTotalPrice();

          setcartTotalWithoutDiscount(response);
        }
      } catch {
        console.log('No cart');
      }
    };

    void getApiCartTotal();

    void getApiTotalWithoutDiscount();
  }, [userCartTotal]);

  useEffect(() => {
    setActivePromocode(storeActivePromocode);
  }, [storeActivePromocode]);

  const removeProductFromCart = (productId: string): void => {
    try {
      setIsDisabledModifyButtons(true);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      dispatch(
        updateProductInCart({
          productId,
          quantity: 0,
        })
      )
        .then(unwrapResult)
        .then(() => {
          toast.success('Product removed from cart');
          setIsDisabledModifyButtons(false);
        })
        .catch(() => {
          toast.error('Error removing product to cart');
          setIsDisabledModifyButtons(false);
        });
    } catch (error) {
      toast.error('Can`t remove product');
      setIsDisabledModifyButtons(false);
    }
  };

  const changeProductQuantity = (productId: string, amount: number): void => {
    try {
      setIsDisabledModifyButtons(true);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      dispatch(
        updateProductInCart({
          productId,
          quantity: amount,
        })
      )
        .then(unwrapResult)
        .then(() => {
          toast.success('Product updated in cart');
          setIsDisabledModifyButtons(false);
        })
        .catch(() => {
          toast.error('Error updating product to cart');
          setIsDisabledModifyButtons(false);
        });
    } catch (error) {
      toast.error('Can`t change product amount');
      setIsDisabledModifyButtons(false);
    }
  };

  interface IProductItem {
    productId: string;
    name: string;
    image: string;
    quantity: number;
    price: number;
    discountedPrice: number;
    promocode?: string;
    totalPrice: number;
    isDiscounted?: boolean;
  }

  const formatProductData = (product: LineItem): IProductItem => ({
    productId: product.productId,
    name: product.name['en-US'],
    image: product.variant.images ? product.variant.images[ZERO_INDEX].url : '',
    quantity: product.quantity,
    price: product.price.value.centAmount / CENTS_IN_DOLLAR,
    discountedPrice:
      Number(product.price.discounted?.value.centAmount) / CENTS_IN_DOLLAR,
    promocode: product.price.discounted?.discount.id,
    totalPrice: product.totalPrice.centAmount / CENTS_IN_DOLLAR,
    isDiscounted: !!product.price.discounted?.discount.id,
  });

  const handleApplyPromocode = (e: FormEvent): void => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      promo: { value: string };
    };

    const promocode = target.promo.value;

    const applyPromo = async (): Promise<void> => {
      try {
        setIsDisabledPromoInput(true);

        const response = await cartController.addDiscountCode(promocode);

        if (response.statusCode === HttpStatus.OK) {
          toast.success('Promo applied successfully');

          // setIsDisabledPromoInput(false);
          dispatch(setPromocode(target.promo.value));

          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          dispatch(updateCart())
            .then(unwrapResult)
            .catch(() => {
              console.log('Can`t update cart');
            });
          return;
        }

        toast.error((response as HttpErrorType).message);

        setIsDisabledPromoInput(false);
      } catch (error) {
        toast.error('Failed to apply promocode');
        setIsDisabledPromoInput(false);
      }
    };

    void applyPromo();
  };

  const handleClearCart = (): void => {
    cartController
      .clearCart()
      .then(() => {
        setCartProductsQty(ZERO);
        setCartTotal(ZERO);
        setcartTotalWithoutDiscount(ZERO);
        setDisplayCartItems([]);

        void cartController.removeDiscountCode(activePromocode);

        setActivePromocode('');

        dispatch(setPromocode(''));

        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        dispatch(updateCart())
          .then(unwrapResult)
          .catch(() => {
            console.log('Can`t clear cart');
          });
      })
      .catch(() => {
        console.log('Unable to clear cart');
      });
  };

  const handleOpenModal = (e: FormEvent): void => {
    e.preventDefault();

    setIsModalOpen(true);
  };

  const handleConfirmClick = (): void => {
    handleClearCart();

    setIsModalOpen(false);
  };

  const handleCancelClick = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="mx-auto my-0 max-w-screen-xl p-8">
        {displayCartItems && displayCartItems.length === EMPTY_CART_ITEMS && (
          <div className="flex h-[50vh] flex-col items-center justify-center">
            <h1 className="mb-4 text-2xl font-bold">Cart is empty!</h1>
            <button
              type="button"
              className="mt-2 h-[40px] w-[100px] rounded-xl bg-orange-main"
            >
              <Link href={ERoute.catalog}>To catalog</Link>
            </button>
          </div>
        )}
        {displayCartItems && displayCartItems.length > EMPTY_CART_ITEMS && (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_350px]">
            <div className="flex flex-col justify-start gap-4">
              <div className="border-b-2 border-b-orange-main pb-4 pt-8 text-2xl font-bold">
                Cart
              </div>
              {userCartProducts.map((product) => {
                const data = formatProductData(product);

                return (
                  <div
                    key={product.id}
                    className="grid grid-cols-[100px_auto] gap-4 border-b border-b-gray-200 pb-4 last:border-0"
                  >
                    <Image
                      className="h-[100px] w-[100px] object-contain"
                      src={data.image}
                      width="100"
                      height="100"
                      alt="product-image"
                    />
                    <div className="grid grid-cols-1 content-start gap-6">
                      <div className="flex flex-row items-start justify-between gap-4 text-xl font-bold">
                        <span>{data.name}</span>
                        <button
                          type="button"
                          className="cursor-pointer justify-self-end"
                          onClick={(): void =>
                            removeProductFromCart(data.productId)
                          }
                        >
                          <Image
                            className="h-[20px] w-[20px]"
                            src={TrashIcon as string}
                            alt="Trash icon"
                          />
                        </button>
                      </div>
                      <div className="grid grid-cols-[100px_100px_1fr] gap-4">
                        <div className="flex justify-self-start">
                          <span>$ {data.discountedPrice}</span>
                        </div>
                        <div className="flex flex-row justify-between gap-2">
                          <button
                            type="button"
                            className="h-[20px] w-[20px] cursor-pointer rounded-full bg-orange-main text-xl leading-4"
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={(): void =>
                              changeProductQuantity(
                                data.productId,
                                data.quantity - CART_STEP
                              )
                            }
                            disabled={isDisabledModifyButtons}
                          >
                            -
                          </button>
                          <div className="flex">{data.quantity}</div>
                          <button
                            type="button"
                            className="h-[20px] w-[20px] cursor-pointer rounded-full  bg-orange-main  text-xl leading-4"
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={(): void =>
                              changeProductQuantity(
                                data.productId,
                                data.quantity + CART_STEP
                              )
                            }
                            disabled={isDisabledModifyButtons}
                          >
                            +
                          </button>
                        </div>
                        <div className="flex justify-self-start font-bold">
                          ${' '}
                          {(data.discountedPrice * data.quantity).toFixed(
                            FRACTION_DIGITS
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row xs:flex-col md:flex-row lg:flex-col">
              <div className="flex w-full flex-col justify-around self-start rounded-lg border border-gray-100 p-8 shadow-lg">
                <div>
                  <div className="border-b-2 border-b-orange-main pb-4 text-2xl font-bold">
                    Total
                  </div>
                  <div className="flex flex-col gap-4 border-b border-b-gray-400 py-4 pb-4">
                    <div className="flex justify-between">
                      <span className="font-bold">Quantity</span>
                      <span>{cartProductsQty} pcs.</span>
                    </div>
                    <div className="flex flex-col justify-start gap-4">
                      {cartTotalWithoutDiscount - cartTotal > DISCOUNT_DIFF && (
                        <>
                          <div className="flex justify-between">
                            <span className="font-bold">Order total</span>
                            <span className="line-through">
                              $ {cartTotalWithoutDiscount}
                            </span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>Discounted total</span>
                            <span>$ {cartTotal}</span>
                          </div>
                        </>
                      )}
                      {cartTotalWithoutDiscount - cartTotal <=
                        DISCOUNT_DIFF && (
                        <div className="flex justify-between">
                          <span className="font-bold">Order total</span>
                          <span className="">$ {cartTotalWithoutDiscount}</span>
                        </div>
                      )}
                    </div>
                    {activePromocode.length > ZERO && (
                      <div className="font-semibold text-green-500">
                        Promocode applied: {activePromocode}
                      </div>
                    )}
                  </div>
                </div>
                <div className="ml-0 flex w-full flex-col gap-4 pt-4 md:ml-2 lg:ml-0 ">
                  <form className="flex w-full" onSubmit={handleApplyPromocode}>
                    <input
                      className="border-1 mr-2 flex h-[40px] w-full flex-grow rounded-md border border-gray-200 p-2 text-gray-500"
                      type="text"
                      name="promo"
                      placeholder={activePromocode ?? 'Enter promocode'}
                      disabled={isDisabledPromoInput}
                    />
                    <button
                      type="submit"
                      className="h-10 rounded-md bg-orange-main px-4 text-white"
                      disabled={isDisabledPromoInput}
                    >
                      Apply
                    </button>
                  </form>
                  <form className="flex w-full" onSubmit={handleOpenModal}>
                    <button
                      type="submit"
                      className="h-[40px] w-full rounded-md bg-red-500 text-white"
                    >
                      Clear cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <ModalPrompt
        isOpen={isModalOpen}
        modalTitle="Clear cart"
        modalContent="Are you sure want to clear the shopping cart?"
        onConfirmClick={handleConfirmClick}
        onCancelClick={handleCancelClick}
      />
    </>
  );
}

export default cart;
