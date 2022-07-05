export default interface IProduct {
    id: number;
    brand: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    quantity: number;
    images: string[];
}