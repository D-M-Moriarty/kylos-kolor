import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'
import Image from 'next/image';
import { fetchPostJSON } from '@utils/api-helpers';
import { useState } from 'react';

const Products = () => {
  const {
    addItem, removeItem,
    cartDetails,
    cartCount,
    formattedTotalPrice,
    redirectToCheckout,
    clearCart,
    setItemQuantity
  } = useShoppingCart()
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetchPostJSON(
      '/api/checkout_sessions/cart',
      cartDetails
    )

    if (response.statusCode > 399) {
      console.error(response.message)
      setErrorMessage(response.message)
      setLoading(false)
      return
    }

    redirectToCheckout({ sessionId: response.id })
  }

  async function handleCheckout(event) {
    event.preventDefault()

    const response = await fetch('/.netlify/functions/redirect-to-checkout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartDetails)
    })
      .then((res) => res.json())
      .catch((error) => console.log(error))

    console.log('Checkout result:', response)
  }

  if (cartCount === 0) {
    return (
      <div>
        <h2>Shopping Cart Display Panel</h2>
        <p style={{ maxWidth: 300 }}>
          You haven't added any items to your cart yet. That's a shame.
        </p>
      </div>
    )
  } else {
    return (
      <section className="products">
        {Object.keys(cartDetails).map((sku, index) => {
          const product = cartDetails[sku]
          return (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p className="price">
                {formatCurrencyString({
                  value: product.price,
                  currency: 'USA',
                })}
              </p>
              <button
                className="cart-style-background"
                onClick={() => {
                  console.log(product)
                  addItem(product)
                }}
              >
                Add to cart
              </button>
              <button
                className="cart-style-background"
                onClick={() => removeItem(product.id)}
              >
                Remove
              </button>
            </div>
          )
        })}
      </section>
    )
  }
}

export default Products
