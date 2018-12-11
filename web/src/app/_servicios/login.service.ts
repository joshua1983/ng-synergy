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
      if (user){
        localStorage.setItem('user',JSON.stringify(user));
      }
      return user;
    }))
  }
  logout(){
    localStorage.removeItem('user');
  }
}
