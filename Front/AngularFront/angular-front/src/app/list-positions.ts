import { OnInit } from '@angular/core';
import { Position } from './Position'

export class ListPositions {

    positions: Position[] = [
        {id: 1, name: 'first', price: 99.5, description: "it's beautiful", imagePath: '/assets/images/1.png'},
        {id: 2, name: 'second', price: 88.5, description: "something new", imagePath: '/assets/images/2.png'},
        {id: 3, name: 'third', price: 77.5, description: "another product", imagePath: '/assets/images/3.png'},
        {id: 4, name: 'fourth', price: 66.5, description: "being itself", imagePath: '/assets/images/4.png'},
        {id: 5, name: 'fifth', price: 55.5, description: "write your description here", imagePath: '/assets/images/5.png'}
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