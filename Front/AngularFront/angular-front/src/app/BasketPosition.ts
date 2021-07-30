import { HttpClient } from "@angular/common/http";
import { Position } from "./Position";

export class BasketPosition {
    price!: number;
    num: number;
    pos: Position;

    constructor (position: Position) {
        this.num = 1;
        this.pos = position;
        this.calculatePrice();
    }

    public calculatePrice(): void {
        // throw to REST (post on /basket/calculate)
        // see BasketService for HttpClient
    }

    public increaseNum() {
        this.num += 1;
    }

    public decreaseNum() {
        // If num == 0 ---> disable button
        if (this.num > 0) {
            this.num -= 1;
        }
    }

}