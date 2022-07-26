import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '@components/navigation/Navigation'
import Footer from '@components/navigation/Footer'
import * as config from '../config'
import { CartProvider, DebugCart } from 'use-shopping-cart/react'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'TypeScript Next.js Stripe Example',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thorwebdev" />
      <meta name="twitter:title" content="TypeScript Next.js Stripe Example" />
      <meta
        name="twitter:description"
        content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
      />
    </Head>
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string}
      successUrl="stripe.com"
      cancelUrl="twitter.com/dayhaysoos"
      currency={config.CURRENCY}
      allowedCountries={['US', 'GB', 'CA']}
      billingAddressCollection={true}
    >
      <div className="w-screen mt-4">
        <Navigation />
        {children}
        <Footer />
      </div>
      {/* <DebugCart /> */}
    </CartProvider>
    {/* <div className="banner">
      <span>
        This is a{' '}
        <a
          href="https://github.com/stripe-samples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe Sample
        </a>
        .{' View code on '}
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </span>
    </div> */}
  </>
)

export default Layout
