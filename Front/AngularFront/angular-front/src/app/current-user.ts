import { Injectable } from '@angular/core'

@Injectable()

export class CurrentUser {
    static uname: string;
    static email: string;
    static phoneNumber: string;

    constructor() {
    }

    // public getName() {
    //     return this.uname;
    // }

    // public getEmail() {
    //     return this.email;
    // }

    // public getPhoneNumber() {
    //     return this.phoneNumber;
    // }

    // public setName(name: string) {
    //     this.name = name;
    // }

    // public setEmail(email: string) {
    //     this.email = email;
    // }

    // public setPhoneNumber(phoneNumber: string) {
    //     this.phoneNumber = phoneNumber;
    // }

    public print(): void {
        console.log(CurrentUser.uname);
        console.log(CurrentUser.email);
        console.log(CurrentUser.phoneNumber);
    }

    get staticName() {
        return CurrentUser.uname;
    }

    get staticEmail() {
        return CurrentUser.uname;
    }

    get staticPhoneNumber() {
        return CurrentUser.uname;
    }

    public getInstance(): CurrentUser {
        return this;
    }
}