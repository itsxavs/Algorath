import { User } from "./user";

export class Relation {
  firstUser: User
  secondUser: User

  constructor(firstUser: User, secondUser: User){
    this.firstUser = firstUser;
    this.secondUser = secondUser;
  }
}
