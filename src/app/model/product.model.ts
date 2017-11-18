export class Product {
    id: number;
    name: string;
    description: string;
    categories: Array<string>;
    price: number;
    link: string;
    bandSize?: Array<Option> | Option;
    cupSize?: Array<Option> | Option;
    colors?: Array<Image> | Option;
    titleImage: Image;
    images: Array<Image>;
    rating: number;
    quantity: number;
    reviews: number;
}

export class Option {
    title?: string;
    missBandSize?: Array<number>;
    missCupSize?: Array<string>;
    missColors?: Array<Image>;
}

export class Image extends Option {
    src: string;
    alt: string;
}




