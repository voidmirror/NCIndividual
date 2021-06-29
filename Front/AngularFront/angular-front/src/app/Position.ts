export class Position {
    id!: number;
    name!: string;
    price!: number;
    description!: string;
    // imagePath: string;

    // Position(name: string, price: number, description: string) {
    //     this.name = name;
    //     this.price = price;
    //     this.description = description;
    // }

    // Position(id: number, name: string, price: number, description: string) {
    //     this.name = name;
    //     this.price = price;
    //     this.description = description;
    // }

    constructor (name: string, price: number, description: string) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    // constructor (id: number, name: string, price: number, description: string) {
    //     this.id = id;
    //     this.name = name;
    //     this.price = price;
    //     this.description = description;
    // }
}