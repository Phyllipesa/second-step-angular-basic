import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  
  userSelected: User | undefined;
  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(250)]],
      age: ['', [Validators.required, Validators.min(12), Validators.max(110)]],
    });
  }

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
    },
    {
      name: "Taggart",
      age: 33,
    }
  ];

  infoUserSelected(user: User) {
    this.userSelected = user;
  }

  submitForm() {
    this.users.push(this.userForm.value);
    this.userForm.reset();
  }
}
