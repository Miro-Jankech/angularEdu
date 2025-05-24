import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS  } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  users = DUMMY_USERS;
  selectedUserId = 'u1';
  actualSelectedUser: any | undefined;

  ngOnInit(): void {
    console.log("INIT")  
  }

  get selectedUser(): any {
    console.log("DOING COMPARATION")
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  onSelectUser(id:string) {
    this.selectedUserId = id;
    this.actualSelectedUser = this.selectedUser
  }

}
