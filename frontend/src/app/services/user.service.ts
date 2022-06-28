import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find, map } from 'rxjs/operators';
import { User } from '../components/user';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL: string = 'http://localhost:3000/users';
  users: Observable<User[]>;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]>{

    //Intentar coger Observable tiparlo y pasarlo como obsevable para luego cogerlo con async
    this.users = this.httpClient.get(this.URL).pipe(
      map((users: User[] ) => {
        return users.map( (user: User) => user)
      })
    )
    return this.users

  }

  getUserId( id: number): Observable<User>{
    const URL = `${this.URL}/${id}`
    return this.httpClient.get(URL).pipe(
      map((user: User[]) => {
        debugger;
        const userIntance = new User(user[0].id, user[1].name);
        console.log(userIntance)
        return userIntance
    })
    )
  }

  createUser(body: any): Observable<any>{
    return this.httpClient.post(this.URL, body)
  }

  async getUser(){
    return await this.users.toPromise().then(users => users)
  }



}
