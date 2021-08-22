import { Injectable } from '@angular/core'
import { Router } from '@angular/router';
import { Role } from './CustomTypes'

@Injectable()

export class CurrentUser {
    name!: string;
    username!: string;
    email!: string;
    phoneNumber!: string;
    roles!: Role[];
    

    constructor() {
        let copy = JSON.parse(localStorage.getItem('MySportStoreCurrentUser') as string) as CurrentUser;
        console.log('copy');
        console.log(copy);
        console.log('end copy');
        if (copy != null) {
            this.name = copy.name;
            this.username = copy.username;
            this.email = copy.email;
            this.phoneNumber = copy.phoneNumber;
            this.roles = copy.roles;
        }
    }

    public clearCurrentUser(): void {
        this.name = '';
        this.username = '';
        this.email = '';
        this.phoneNumber = '';
        for (let i = 0; i < this.roles.length; i++) {
            this.roles.pop();
        }
        this.print();
        this.deleteFromStorage();



    }


    public print(): void {
        console.log(this.name);
        console.log(this.username);
        console.log(this.email);
        console.log(this.phoneNumber);
        console.log(this.roles);
    }

    public findPrivilege(privilege: string): boolean {
        if (this.roles != null) {
            for (let i = 0; i < this.roles.length; i++) {
                for (let j = 0; j < this.roles[i].privileges.length; j++) {
                    if (privilege == this.roles[i].privileges[j].name) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public deleteFromStorage(): void {
        localStorage.removeItem('MySportStoreCurrentUser');
    }

    public saveInStorage(): void {
        localStorage.setItem('MySportStoreCurrentUser', JSON.stringify(this))
    }

}