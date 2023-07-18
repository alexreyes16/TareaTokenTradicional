import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {  
  constructor(private userService: UserService,private router:Router) {}
  ngOnInit(): void { }
  onSubmit(user:string,pass:string) {
    this.userService.register(user,pass)
      .then(response => {
        console.log(response);
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error));
  }
  userLogin(): void {
  this.router.navigate(['login']);
}
}
