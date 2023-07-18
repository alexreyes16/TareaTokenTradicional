import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private userService: UserService, private router: Router) { }
  
  logout() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['login']);
      })
    .catch(error=>console.log(error))
  }
}
