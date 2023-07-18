import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private userService: UserService) { }  
userRegister(): void {
  this.router.navigate(['register']);
}
  ngOnInit(): void {
  }
  onSubmit(user:string,pass:string) {
    this.userService.login(user, pass)
      .then(respose => {
        this.router.navigate(['home']);
        console.log(respose);        
      })
      .catch(error => console.log(error));
  }
  loginGoogle() {
      this.userService.loginWithGoogle()
      .then(respose => {
        this.router.navigate(['home']);
        console.log(respose);
      })
      .catch(error => console.log(error));
    }
}
