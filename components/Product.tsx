import React, { useEffect, useState } from 'react'
import ItemQuantity from './item-quantity/item-quantity';
import CartIcon from '@public/icon-cart.svg'
import Image from 'next/image';
import Carousel from './carousel/carousel';
import IProduct from "@model/product";
import { useShoppingCart } from 'use-shopping-cart/react';
import { IShoppingCartProduct } from '@model/use-shopping-cart-product';
import { formatCurrencyString } from 'use-shopping-cart/core'

const Product: React.FC<IProduct> = ({ product }) => {
    const { addItem, clearCart } = useShoppingCart()

    useEffect(() => {

        clearCart()
    }, [])

    const convertProduct = (prod: IProduct): Partial<IShoppingCartProduct> => {
        return {
            name: prod.name,
            description: prod.description,
            id: prod.id,
            price: calcPrice(prod),
            image: prod.images[0],
        }
    }

    const calcPrice = (prod: IProduct): number => {
        return prod.discount > 0
            ? ((prod.price * prod.discount) / 100)
            : prod.price;
    }

    function productDetails(prod: IProduct) {
        return (
            <div className="md:grid md:grid-cols-2 md:py-16">
                <Carousel imagePaths={prod.images}></Carousel>
                <div className="p-6 md:px-12 md:my-auto">
                    <p className="text-xs font-bold uppercase text-primary">
                        {prod.brand}
                    </p>
                    <p className="py-4 text-3xl font-bold text-very-dark-blue md:text-5xl">
                        {prod.name}
                    </p>
                    <p className="pb-4 text-sm text-neutral md:text-base">
                        {prod.description}
                    </p>
                    <div className="flex flex-row pb-6 md:flex-col">
                        <div className="flex flex-row items-center justify-start flex-1">
                            <p className="pr-4 text-2xl font-bold text-very-dark-blue">
                                {formatCurrencyString({ value: calcPrice(prod), currency: 'USD' })}
                            </p>
                            {prod.discount ? (
                                <p className="p-1 text-sm font-bold rounded text-primary bg-pale-orange">
                                    {prod.discount}%
                                </p>
                            ) : null}
                        </div>
                        <div className="my-auto ">
                            {prod.discount ? (
                                <div className="flex items-center justify-end flex-1 md:flex md:justify-start md:py-2">
                                    <p className="font-bold line-through text-grayish-blue">
                                        {formatCurrencyString({ value: prod.price, currency: 'USD' })}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="md:flex md:gap-4">
                        <button
                            className="w-4/6 font-semibold text-white normal-case btn btn-primary md:w-2/3 md:gap-4"
                            onClick={() => {
                                const product = convertProduct(prod);
                                addItem(product)
                            }}
                        >
                            <Image
                                src={CartIcon}
                                alt="Cart icon"
                                className="h-4 pr-4 fill-white md:pr-0"
                            />{' '}
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        productDetails(product)
    )
}
export default Product