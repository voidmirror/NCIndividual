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