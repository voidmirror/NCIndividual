import { BasketPosition } from "./BasketPosition";
import { UserService } from "./user-service.service";

export interface Role {
    name: string;
    privileges: Privilege[];
}

export interface Privilege {
    name: string;
    roles: string[];
}

export interface BasketCalculator {
    basketPositions: BasketPosition[];
    username : string;
    basketSum: number;
}

export class Category {
    id!: number;
    name!: string;

    constructor(name: string) {
        this.name = name;
    }
}