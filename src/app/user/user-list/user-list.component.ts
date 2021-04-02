import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];// create property (empty array)
  searchCriteria: string = "";

  constructor(
    private usrsrv: UserService  //Inject User service
  ) { }

  ngOnInit(): void {
    this.usrsrv.list().subscribe(
      users => {
        console.log("Users:", users)
        this.users = users;

      },
      err => {
        console.error(err);
      }

    );
  }

}


