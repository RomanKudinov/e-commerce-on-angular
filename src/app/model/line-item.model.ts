import { Option } from './option.model';

export class Line {
    public id: number;
    public name: string;
    public link: string;
    public color: Option;
    public size: string;
    public price: number;
    public quantity: number;
    public image: Option;
    constructor(line: Line) {
        this.id = line.id;
        this.name = line.name;
        this.link = line.link;
        this.color = line.color;
        this.size = line.size;
        this.price = line.price;
        this.quantity = line.quantity;
        this.image = line.image;
    }
}
