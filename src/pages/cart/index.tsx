import { FormEvent, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  DiscountedLineItemPriceForQuantity,
  LineItem,
} from '@commercetools/platform-sdk';
import { toast } from 'react-toastify';
import { unwrapResult } from '@reduxjs/toolkit';
import { HttpErrorType } from '@commercetools/sdk-client-v2';
import Link from 'next/link';

import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

import {
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

function cart(): ReactElement {
  const [displayCartItems, setDisplayCartItems] = useState<CartItem[]>([]);
  const [cartTotal, setCartTotal] = useState(ZERO);
  const [cartTotalWithoutDiscount, setcartTotalWithoutDiscount] =
    useState(ZERO);

  const [cartProductsQty, setCartProductsQty] = useState(ZERO);
  const [isDisabledPromoInput, setIsDisabledPromoInput] = useState<boolean>();
  const [activePromocode, setActivePromocode] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const [isDisabledModifyButtons, setIsDisabledModifyButtons] =
    useState<boolean>();

  const userCartProducts = useAppSelector(getCartProducts);
  const userCartTotal = useAppSelector(getCartTotal);
  const storeActivePromocode = useAppSelector(getPromoCode);

  const cartController = new CartController();

  useEffect(() => {
    if (userCartProducts.length >= EMPTY_CART_ITEMS) {
      setCartProductsQty(
        userCartProducts.reduce(
          (acc, value) => acc + value.quantity,
          EMPTY_CART_ITEMS
        )
      );

      cartController
        .getCart()
        .then(() => {
          setDisplayCartItems(userCartProducts);
        })
        .catch(() => {
          console.log('error in getting cart');
        });
    }
  }, [userCartProducts]);

  useEffect(() => {
    const getApiCartTotal = async (): Promise<void> => {
      const response = await cartController.getTotalPrice();

      setCartTotal(response);
    };

    const getApiTotalWithoutDiscount = async (): Promise<void> => {
      const response = await cartController.getOriginalTotalPrice();

      setcartTotalWithoutDiscount(response);
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
    discountedPrice: DiscountedLineItemPriceForQuantity[];
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
    discountedPrice: product.discountedPricePerQuantity,
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

          setIsDisabledPromoInput(false);
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
    console.log('Confirm button clicked');

    handleClearCart();

    setIsModalOpen(false);
  };

  const handleCancelClick = (): void => {
    console.log('Cancel button clicked');

    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="ml-2">HOME / CART</h1>
      <main className="">
        {displayCartItems && displayCartItems.length === EMPTY_CART_ITEMS && (
          <div className="flex h-[50vh] flex-col items-center justify-center">
            <h2>Cart is empty, add something!</h2>
            <button
              type="button"
              className="mt-2 h-[40px] w-[100px] rounded-xl bg-orange-main"
            >
              <Link href={ERoute.catalog}>To catalog</Link>
            </button>
          </div>
        )}
        {displayCartItems && displayCartItems.length > EMPTY_CART_ITEMS && (
          <div className="flex flex-col-reverse justify-between px-10 lg:flex-row">
            <div className="flex flex-col justify-center">
              {userCartProducts.map((product) => {
                const data = formatProductData(product);

                return (
                  <div
                    key={product.id}
                    className="flex flex-col pb-2 mt-4 border-b-2 border-b-orange-main"
                  >
                    <h3 className="mb-2">{data.name}</h3>
                    <div className="flex">
                      <Image
                        src={data.image}
                        width="100"
                        height="100"
                        alt="product-image"
                      />
                      <div className="flex flex-col items-start mx-2 ml-10">
                        <div className="flex px-1 py-2 mx-2 mb-2 border border-gray-700 rounded-lg">
                          <button
                            type="button"
                            className="mx-2 h-[20px] w-[20px] cursor-pointer rounded-full bg-orange-main text-xl leading-4"
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
                            className="mx-2 h-[20px] w-[20px] cursor-pointer rounded-full  bg-orange-main  text-xl leading-4"
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
                        <button
                          type="button"
                          className="self-center cursor-pointer"
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
                      <div className="ml-2 flex w-[300px] flex-col items-end lg:ml-10">
                        {data.isDiscounted && (
                          <>
                            <div className="flex">
                              Base price: ${' '}
                              <span className="line-through">
                                {Math.round(
                                  data.price * data.quantity * CENTS_IN_DOLLAR
                                ) / CENTS_IN_DOLLAR}
                              </span>
                            </div>
                            <div className="flex">
                              <strong>Final price: $ {data.totalPrice}</strong>
                            </div>
                          </>
                        )}
                        {!data.isDiscounted && (
                          <div className="flex">
                            Original price: ${' '}
                            <span className="">{data.totalPrice}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row xs:flex-col md:flex-row lg:flex-col">
              <div className="flex h-[213px] w-[352px] flex-col justify-around self-start rounded-[15px] border border-gray-700  p-4  shadow">
                <div className="border-b-2 border-b-orange-main">Total</div>
                <div className="flex justify-between">
                  <span>Quantity: </span>
                  <span>{cartProductsQty} pcs.</span>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Order total: </span>
                    <span>$ {cartTotalWithoutDiscount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Final total: </span>
                    <span>$ {cartTotal}</span>
                  </div>
                  {activePromocode.length > ZERO && (
                    <div className="flex">
                      <span className="text-green-500">
                        Promocode applied: {activePromocode}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="ml-0 flex w-[352px] flex-col md:ml-2 lg:ml-0">
                <form
                  className="flex w-full mt-4 md:mt-0 lg:mt-4"
                  onSubmit={handleApplyPromocode}
                >
                  <input
                    className="border-1 mr-2 flex h-[40px] flex-grow rounded-xl border border-gray-700 p-2"
                    type="text"
                    name="promo"
                    placeholder="Enter promocode"
                    disabled={isDisabledPromoInput}
                  />
                  <button
                    type="submit"
                    className="h-[40px] rounded-xl bg-orange-main p-2 text-white"
                    disabled={isDisabledPromoInput}
                  >
                    Apply
                  </button>
                </form>
                <form className="flex w-full mt-4" onSubmit={handleOpenModal}>
                  <button
                    type="submit"
                    className="h-[40px] w-full rounded-xl bg-red-500 text-white"
                    disabled={isDisabledPromoInput}
                  >
                    Clear cart
                  </button>
                </form>
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
