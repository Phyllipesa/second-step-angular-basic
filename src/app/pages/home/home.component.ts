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
  notFound: boolean = false;
  emptySearchErr: boolean = false;

  constructor(
    private userService: UserService
  ) {}

  getGitUser() {
    if(this.username.length == 0) {
      this.emptySearchErr = true;

      this.setTimeErr('emptySearchErr')
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
            this.notFound = true;
          }

         this.setTimeErr('notFound')
        }
      }
    )
  }

  setTimeErr(err: 'emptySearchErr' | 'notFound') {
    setTimeout(() => {
      this[err] = false;
    }, 1000);
  }
}
