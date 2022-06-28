import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Relation } from 'src/app/components/relation';
import { User } from 'src/app/components/user';
import { OverlayService } from 'src/app/services/overlay.service';
import { RelationService } from 'src/app/services/relation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-join-page',
  templateUrl: './join-page.component.html',
  styleUrls: ['./join-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JoinPageComponent implements OnInit, OnDestroy {


  private users: User[];
  private usersNotJoin: User[];
  private usersJoin: User[];
  private relationOfUser: Relation[] = [];
  private subscriptions: Subscription;

  private relations$: Observable<any> = this.relationService.getRelations();
  private relation: Relation[] = [];
  private users$: Observable<User[]> = this.userService.getUsers();

  private userSelected: User;
  private userJoin: User;

  constructor(private overlayService: OverlayService, private relationService: RelationService, private userService: UserService) {}

  ngOnInit() {
    this.subscriptions = this.overlayService.overlayRef.backdropClick().subscribe(() => this.overlayService.close());
    this.getUsers()
    setTimeout(() => {
      this.getRelation()
    },0)


  }
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe()
  }

  userSelectedEvent(user: User){
    if(!this.userSelected || user.id != this.userSelected.id){
      this.userSelected = user;
      this.getUserNotJoin(user)
      debugger;
    }else{
      this.userSelected = null;
      this.deleteList();
    }
  }
  userJoinEvent(user: User){

    if(!this.userJoin || user.id != this.userJoin.id){
      this.userJoin = user;
    }else{
      this.userJoin = null;
    }
  }

  getRelationByUser(userSelected: User){

    this.relationOfUser = this.relation.filter( relation => {

      if(relation.firstUser.id === userSelected.id || relation.secondUser.id === userSelected.id){

        return relation
      }
      })

    this.usersJoin = this.relation.map( relation => {
     return (relation.firstUser === userSelected) ? relation.secondUser : relation.firstUser
    })

  }

  getUserNotJoin(userSelected: User){
    this.getRelationByUser(userSelected);
    this.usersNotJoin = this.usersJoin.reduce((users, user) => {
      return users.filter(u => u.id != user.id && u.id !== userSelected.id)
    },this.users)

  }

  deleteList(){
    this.usersNotJoin = [];
    this.relationOfUser = [];
  }

  getRelation(): any {
    this.subscriptions.add(this.relations$.subscribe( (relations) => {
      relations.map( (relation : {user1, user2}) => {
        this.relation.push(new Relation(
              this.users.find( u => u.id === relation.user1),
              this.users.find( u => u.id === relation.user2)))
      })
      return null
    }

    ))
  }
  async getUsers(){
    this.subscriptions.add(await this.userService.getUsers().subscribe(users =>{
      debugger;
      this.users = users
    }
    ))
  }

  createRelation(){
    const relation = new Relation(this.userSelected, this.userJoin);
      this.relationOfUser.push(relation);
      this.relation.push(relation);
    this.relationService.createRelations({user1: this.userSelected.id , user2:this.userJoin.id}).subscribe((msg) => {
      console.log(msg)
    })
  }



}
