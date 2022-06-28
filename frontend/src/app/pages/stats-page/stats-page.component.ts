import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/components/user';
import { Stats } from 'src/app/components/stats';
import { OverlayService } from 'src/app/services/overlay.service';
import { RelationService } from 'src/app/services/relation.service';
import { UserService } from 'src/app/services/user.service';
import { Relation } from 'src/app/components/relation';



@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.scss']
})
export class StatsPageComponent implements OnInit, OnDestroy {

  private relations$: Observable<any> = this.relationService.getRelations();
  private relation: Relation[] = [];
  private users: User[];
  private stats: Stats[] = []
  private subscriptions: Subscription = new Subscription;

  constructor(private overlayService: OverlayService, private relationService: RelationService, private userService: UserService) { }

  ngOnInit() {
    this.overlayService.overlayRef.backdropClick().subscribe(() => this.overlayService.close())

    this.loadingStats();



    debugger;
  }
  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

  loadingStats(){
  this.getUsers()
   setTimeout(() => {
     this.subscriptions.add(this.relations$.subscribe((relations) => {
        relations.map( (relation : {user1, user2}) => {
          this.relation.push(new Relation(
                this.users.find( u => u.id === relation.user1),
                this.users.find( u => u.id === relation.user2)))
        });

      }))

   }, 3000);
   setTimeout(() => {
    this.getStats()
   }, 5000)
  }
  getUsers(){
    this.subscriptions.add(this.userService.getUsers().subscribe(users =>{
      this.users = users
    }
    ))
    return null;
  }

  getStats() {
    console.log(this.relation)
    this.users.map((user: User) => {
    const count = this.relation.reduce((a,b) => {
        if(b.firstUser.id === user.id || b.secondUser.id === user.id ) a = a + 1;
        return a
      },0)
      this.stats.push(new Stats(user, count))
    }
    )
    debugger;
  }



}
