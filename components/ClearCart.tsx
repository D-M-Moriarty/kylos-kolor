import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart/react'

export default function ClearCart() {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    const clear = async () => {
      clearCart()
    }

    clear();
  }, []);

  return <p>Cart cleared.</p>
}
