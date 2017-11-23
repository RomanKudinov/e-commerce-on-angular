import { Option } from './option.model';

export class Product {
    id: number;
    name: string;
    description: string;
    categories: Array<string>;
    price: number;
    link: string;
    bandSize?: Array<Option> | Option;
    cupSize?: Array<Option> | Option;
    colors?: Array<Option> | Option;
    titleImage: Option;
    images: Array<Option>;
    rating: number;
    quantity: number;
    reviews: number;
}



