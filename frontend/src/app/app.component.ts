import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './components/user';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { StatsPageComponent } from './pages/stats-page/stats-page.component';
import { OverlayService } from './services/overlay.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{


  users$ : Observable<User[]> = this.userService.getUsers();


  constructor(private userService: UserService, private overlayService: OverlayService){}

  ngOnInit(): void {

  }


  openJoin(){
    this.overlayService.open(JoinPageComponent)
  }

  openStats(){
    this.overlayService.open(StatsPageComponent, )
  }

  getUsers(){
    this.users$ = this.userService.getUsers()
    this.users$.subscribe(v => {
      console.log(v)
    });

  }
}
