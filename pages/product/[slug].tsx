import { InferGetStaticPropsType } from "next/types";
import Product from "../../components/Product";


export default function Slug() {

const product = {
    id: 1,
    brand: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    quantity: 0,
    discount: 50,
    images: [
      '../../assets/image-product-1.jpg',
      '../../assets/image-product-2.jpg',
      '../../assets/image-product-3.jpg',
      '../../assets/image-product-4.jpg',
    ],
  };
    return (
        <Product product={product} />
    )
}