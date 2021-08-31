import { User } from 'src/app/user';

export class AuthService {
    user: User
    isLoggedIn: boolean = false

    isAuthenticated() {
        this.user = JSON.parse(localStorage.getItem("user"))
        if (this.user != null)
            this.isLoggedIn = true
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 800);
        })
        return promise;
    }

}