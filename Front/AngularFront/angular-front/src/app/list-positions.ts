import { OnInit } from '@angular/core';
import { Position } from './Position'

export class ListPositions {

    positions: Position[] = [
        ];

    constructor () {
        
    }

    printPositions(): void {
        console.log(this.positions);
    }

    getPositions() : Position[] {
        return this.positions;
    }



}