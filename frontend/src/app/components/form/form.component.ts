import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() newUser= new EventEmitter<void>();

  private name : String

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.userService.createUser({name: this.name}).subscribe(
      () => this.newUser.emit()
    );
    this.name = '';
  }

}
