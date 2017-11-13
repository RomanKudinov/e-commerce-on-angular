export class Product {
    id: number;
    alt: string;
    name: string;
    description: string;
    categories: Array<string>;
    price: number;
    link: string;
    bandSize?: Array<number>;
    cupSize?: Array<string>;
    color?: Array<string>;
    titleImage: string;
    images: Array<string>;
    rating: number;
    quantity: number;
    reviews: number;
}
