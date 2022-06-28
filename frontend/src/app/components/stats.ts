import { User } from "./user";

export class Stats{
  user: User
  count: number;

  constructor(user: User, count: number){
    this.user = user;
    this.count = count;
  }
}
