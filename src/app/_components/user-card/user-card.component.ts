import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user: User = {
    name: '',
    age: 0
  };

  @Output() userInfoEmitter = new EventEmitter<User>();

  returnData() {
    this.userInfoEmitter.emit(this.user);
  }
}
