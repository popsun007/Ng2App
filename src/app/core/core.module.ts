import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user-service/user.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    UserService,
  ],
})

export class CoreModule {}
