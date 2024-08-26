import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  username: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((param) => {
    //   this.username = param.get('username');
    // })
    this.getName();
  }

  getName() {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    })
  }

}
