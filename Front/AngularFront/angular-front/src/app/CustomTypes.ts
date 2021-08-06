export interface Role {
    name: string;
    privileges: Privilege[];
}

export interface Privilege {
    name: string;
    roles: string[];
}