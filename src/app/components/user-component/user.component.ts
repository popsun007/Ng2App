import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/user-service/user.service';

@Component({
  selector: 'user-component',
  templateUrl: './user.html',
  //  styleUrls  : ['user.component.css'],
})

export class UserComponent implements OnInit {

  users: any;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.getUser();
  }
}
