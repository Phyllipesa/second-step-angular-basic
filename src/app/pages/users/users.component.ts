import { Component } from '@angular/core';
import { User } from '../../_models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  // users: string[] = ['Galt', 'Rearden', "d'Anconia"];
  userSelected: User | undefined;
  users: User[] = [
    {
      name: 'Galt',
      age: 37,
    },
    {
      name: 'Rearden',
      age: 42,
    },
    {
      name: "d'Anconia",
      age: 33,
    }
  ];

  infoUserSelected(user: User) {
    this.userSelected = user;
  }
}
