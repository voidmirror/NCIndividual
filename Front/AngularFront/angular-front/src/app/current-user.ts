import { Injectable } from '@angular/core'

@Injectable()

export class CurrentUser {
    private name!: string;
    private email!: string;
    private phoneNumber!: string;

    constructor() {
    }

    public getName() {
        return this.name;
    }

    public getEmail() {
        return this.email;
    }

    public getPhoneNumber() {
        return this.phoneNumber;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setEmail(email: string) {
        this.email = email;
    }

    public setPhoneNumber(phoneNumber: string) {
        this.phoneNumber = phoneNumber;
    }
}