import { HttpClient } from "@angular/common/http";
import { BasketService } from "./basket.service";
import { Position } from "./Position";

export class BasketPosition {
    price!: number;
    num: number;
    pos: Position;

    calcUrl = 'https://localhost:8443/rest/v1/basket/calculate';

    // , private basketService: BasketService

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
        console.log(data);
        
        this.http.post(this.calcUrl, data).subscribe((res) => {
            this.price = res as number;
        })


    }

    public increaseNum(): void {
        this.num += 1;
        console.log('INCREASE NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUM');
        
        this.calculatePrice();
        // this.basketService.backupBasket();
    }

    public setNum(num: number): void {
        this.num = num;
        // this.calculatePrice()
    }

    public decreaseNum() {
        // If num == 0 ---> disable button
        if (this.num > 1) {
            this.num -= 1;
        }
        this.calculatePrice();
        // this.basketService.backupBasket();
    }

}