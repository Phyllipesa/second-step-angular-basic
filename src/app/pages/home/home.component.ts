import { Component, OnInit } from '@angular/core';
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
    private userService: UserService,
  ) {}

  getGitUser() {
    this.userService
    .getGitUser(this.username)
    .subscribe(
      {
        next: data => {
          this.user = data;
        }
      }
    )
  }
}
