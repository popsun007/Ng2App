import { Component } from '@angular/core';
import { MdSelectModule } from '@angular/material';
// import { UserService } from './core/user-service/user.service';

@Component({
  selector: 'app-root',
  // selector: '[app-root]', // Select by attibute
  // selector: '.app-root', // Select by class
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Errands Runner';

  constructor() {}

   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}


