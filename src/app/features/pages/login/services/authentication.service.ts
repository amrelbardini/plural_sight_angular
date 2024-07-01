import { Injectable } from '@angular/core';
import { User } from '../constants/types';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

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
    console.log('From authentication service');
    if (this.user.name === '' || this.userRole === '') {
      return false;
    } else {
      return !!this.user;
    }
  }
}
