import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrls: ['./relation.component.scss']
})
export class RelationComponent implements OnInit {

  @Input() firstUser: User;
  @Input() secondUser: User;


  constructor() { }

  ngOnInit() {
    debugger;
  }

}
