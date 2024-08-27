import { Component } from '@angular/core';
import { UserService } from '../../_service/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User | undefined;
  
  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }

}
