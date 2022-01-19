import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User: User = { name: "Meg", contact: "heremail@email.com", bio: "A straight baller!" };
  constructor() { }

  getUser(): User {
    return this.User;
  }

  setUser(name: string, contact: string, bio: string): void {
    this.User.name = name;
    this.User.contact = contact;
    this.User.bio = bio;
    console.log(this.User);
  }
}
