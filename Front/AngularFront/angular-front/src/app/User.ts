export class User {
    id!: number;
    name!: string;
    login!: string;
    password!: string;
    email!: string;
    phoneNumber!: string;

    // constructor (login: string, password: string) {
        
    // }

    constructor (login: string, password: string, name?: string, email?: string, phoneNumber?: string) {
        this.login = login;
        this.password = password;
        if (name && email && phoneNumber) {
            this.name = name;
            this.email = email;
            this.phoneNumber = phoneNumber
        }
    }
}