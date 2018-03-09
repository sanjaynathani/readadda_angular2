import {Injectable} from '@angular/core';

@Injectable()
export class Authentication {
	username: string;
    password: string;
    isLoggedIn: boolean;
    constructor(){
        console.info('Auth Constructor '+this.isLoggedIn); 
    }
}


