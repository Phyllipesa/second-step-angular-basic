import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';
import { UserGit } from '../../_models/userGit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  user: UserGit | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getGitUser();
  }

  getGitUser() {
    this.userService.getGitUser('bitcoin').subscribe((response: UserGit) => {
      this.user = response;
    })
  }
}
