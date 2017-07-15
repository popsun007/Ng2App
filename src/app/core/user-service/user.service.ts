// Imports
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class UserService {

  private users: any = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
  // Class constructor with Jsonp injected
  constructor(
    private jsonp: Jsonp
  ) { }

  getUser() {
    return this.users;
  }
}
