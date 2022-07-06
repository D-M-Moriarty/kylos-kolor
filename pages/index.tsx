import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

// const IndexPage: NextPage = () => {
//   return (
//     <Layout title="Home | Next.js + TypeScript Example">
//       <ul className="card-list">
//         <li>
//           <Link href="/donate-with-checkout">
//             <a className="card checkout-style-background">
//               <h2 className="bottom">Donate with Checkout</h2>
//               <img src="/checkout-one-time-payments.svg" />
//             </a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/donate-with-elements">
//             <a className="card elements-style-background">
//               <h2 className="bottom">Donate with Elements</h2>
//               <img src="/elements-card-payment.svg" />
//             </a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/use-shopping-cart">
//             <a className="card cart-style-background">
//               <h2 className="bottom">Use Shopping Cart</h2>
//               <img src="/use-shopping-cart.png" />
//             </a>
//           </Link>
//         </li>
//       </ul>
//     </Layout>
//   )
// }

// export default IndexPage

const Home: NextPage = () => {
  return (
    <div className="flex flex-row md:grid md:grid-cols-3 md:py-16">
      <div className="hero min-h-screen min-w-full home-hero">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home