import { HttpClient } from "@angular/common/http";
import { Position } from "./Position";

export class BasketPosition {
    price!: number;
    num: number;
    pos: Position;

    calcUrl = 'https://localhost:8443/rest/v1/basket/calcuate';



    constructor (position: Position, private http: HttpClient) {
        this.num = 1;
        this.pos = position;
        this.calculatePrice();
        
    }

    public calculatePrice(): void {
        // throw to REST (post on /basket/calculate)
        // see BasketService for HttpClient
        // {
        //     num : 
        //     pos :
        // }
        let data = {
            "num": this.num,
            "pos": this.pos
        }
        
        this.http.post(this.calcUrl, data);

    }

    public increaseNum() {
        this.num += 1;
        this.calculatePrice()
    }

    public decreaseNum() {
        // If num == 0 ---> disable button
        if (this.num > 0) {
            this.num -= 1;
        }
        this.calculatePrice();
    }

}