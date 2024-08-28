import { Component } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string = '';
  user: UserGit | undefined;

  constructor(
    private userService: UserService
  ) {}

  getGitUser() {
    if (this.username.length == 0) {
      alert('Please enter a username');
      return;
    }

    this.userService
    .getGitUser(this.username)
    .subscribe(
      {
        next: data => {
          this.user = data;
        },
        error: error => {
          if(error.error.message == 'Not Found') {
            alert('User not found');
          }
        }
      }
    )
  }
}
