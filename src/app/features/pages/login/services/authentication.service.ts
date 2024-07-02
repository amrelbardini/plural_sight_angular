import { Injectable } from '@angular/core';
import { User } from '../constants/types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  redirectUrl:BehaviorSubject<string>=new BehaviorSubject("");


  private user: User = {
    name: '',
    role: '',
  };

  set username(name: string) {
    this.user.name = name;
  }

  set userRole(role: string) {
    this.user.role = role;
  }

  get isLoggedIn(): boolean {

    if (this.user.name === '' || this.userRole === '') {
      alert("You have to login First to view products");
      return false;
    } else {
      return !!this.user;
    }
  }
}
