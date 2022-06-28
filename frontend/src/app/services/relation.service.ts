import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap,  } from 'rxjs/operators';
import { Relation } from '../components/relation';
import { User } from '../components/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  private URL: string = 'http://localhost:3000/relations';
  private relations: Observable<Relation[]>;
  private firstUser: User;
  private secondUser: User;

  constructor(private httpClient: HttpClient, private userService: UserService) { }

  getRelations() : Observable<any>{
    return this.httpClient.get(this.URL);


  }

  createRelations(body : any){
    return this.httpClient.post(this.URL, body)
  }

}
