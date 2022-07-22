import { formatCurrencyString } from 'use-shopping-cart'
import { useShoppingCart } from 'use-shopping-cart/react'
import Image from 'next/image';

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

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await fetch('/.netlify/functions/create-session', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartDetails)
    })
      .then((res) => res.json())
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
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
