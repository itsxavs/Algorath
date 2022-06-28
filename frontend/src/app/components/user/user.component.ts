import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'a-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() clickable = false;
  @Input() user: User;
  @Output() selectedEvent = new EventEmitter<User>()
  private selected = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){

      this.selected = !this.selected;
      this.selectedEvent.emit(this.user)


  }

}
