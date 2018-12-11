import { Component, OnInit } from '@angular/core';
import { LoginService } from '../_servicios/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

  }

  logIn(username:string, password:string, event:Event){
    event.preventDefault();
    this.loginService.login(username,password).subscribe(
      data => {
        this.router.navigate(['home']);
      },
      error => {
        this.router.navigate(['login']);
      }
    )
  }

  logOut(){
    this.loginService.logout();
  }

  navigate(){

  }

}
