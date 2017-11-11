export class Product {
    id: number;
    name: string;
    description: string;
    categories: Array<string>;
    price: number;
    bandSize?: Array<number>;
    cupSize?: Array<string>;
    color?: Array<string>;
    images: Array<string>;
    rating: number;
    quantity: number;
    reviews: number;
}
