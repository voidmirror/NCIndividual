import { Role } from "./CustomTypes";

export class User {
    id!: number;
    name!: string;
    username!: string;
    password!: string;
    email!: string;
    phoneNumber!: string;
    roles!: Role[];

    // constructor (login: string, password: string) {
        
    // }

    constructor (username: string, password: string, name?: string, email?: string, phoneNumber?: string, roles?: Role[]) {
        this.username = username;
        this.password = password;
        if (name && email && phoneNumber) {
            this.name = name;
            this.email = email;
            this.phoneNumber = phoneNumber;
        }
        if (roles) {
            this.roles = roles;
        }
    }
}