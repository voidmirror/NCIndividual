import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-addrole-user',
  templateUrl: './addrole-user.component.html',
  styleUrls: ['./addrole-user.component.css']
})
export class AddroleUserComponent implements OnInit {

  @Input() user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public putRole(role: string): void {
    let send = {
      'username' : this.user.username,
      'role' : role
    }

    this.userService.changeUserRole(send).subscribe();
  }

}
