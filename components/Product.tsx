import React, { useState } from 'react'
import ItemQuantity from './item-quantity/item-quantity';
import CartIcon from '@public/icon-cart.svg'
import Image from 'next/image';
import Carousel from './carousel/carousel';
import IProduct from "@model/product";
import { useShoppingCart } from 'use-shopping-cart/react';

const Product: React.FC<IProduct> = ({ product }) => {
    const { addItem } = useShoppingCart()
    const [productQuantity, setProductQuantity] = useState(product.quantity);
    function handleProductDecrement() {
        setProductQuantity(productQuantity - 1);
    }

    function handleProductIncrement() {
        setProductQuantity(productQuantity + 1);
        console.log(productQuantity)
    }

    function productDetails(product: IProduct) {
        return (
            <div className="md:grid md:grid-cols-2 md:py-16">
                <Carousel imagePaths={product.images}></Carousel>
                <div className="p-6 md:px-12 md:my-auto">
                    <p className="text-xs font-bold uppercase text-primary">
                        {product.brand}
                    </p>
                    <p className="py-4 text-3xl font-bold text-very-dark-blue md:text-5xl">
                        {product.name}
                    </p>
                    <p className="pb-4 text-sm text-neutral md:text-base">
                        {product.description}
                    </p>
                    <div className="flex flex-row pb-6 md:flex-col">
                        <div className="flex flex-row items-center justify-start flex-1">
                            <p className="pr-4 text-2xl font-bold text-very-dark-blue">
                                ${' '}
                                {product.discount > 0
                                    ? ((product.price * product.discount) / 100).toFixed(2)
                                    : product.price.toFixed(2)}
                            </p>
                            {product.discount ? (
                                <p className="p-1 text-sm font-bold rounded text-primary bg-pale-orange">
                                    {product.discount}%
                                </p>
                            ) : null}
                        </div>
                        <div className="my-auto ">
                            {product.discount ? (
                                <div className="flex items-center justify-end flex-1 md:flex md:justify-start md:py-2">
                                    <p className="font-bold line-through text-grayish-blue">
                                        $ {product.price.toFixed(2)}
                                    </p>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="md:flex md:gap-4">
                        <ItemQuantity
                            quantity={productQuantity}
                            handleProductDecrement={handleProductDecrement}
                            handleProductIncrement={handleProductIncrement}
                        ></ItemQuantity>
                        <button
                            className="w-4/6 font-semibold text-white normal-case btn btn-primary md:w-2/3 md:gap-4"
                            onClick={() => {
                                console.log(product)
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