import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService{
  constructor(private http: HttpClient){}

  login(usuario: string, password: string){

    return this.http.post<any>('http://admin.yesynergy.com/index.php/mobile/autenticarEstudiante',{
      usuario: usuario,
      password: password
    }).pipe(map(user => {
      console.log(user);
      if (user){
        if (user.error == 1){
          return user.error;
        }else{
          localStorage.setItem('user',JSON.stringify(user));
        }
      }
      return user;
    }))
  }
  logout(){
    localStorage.removeItem('user');
  }
}
