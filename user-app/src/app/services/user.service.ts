import { Injectable } from '@angular/core';
import { User, UserDetail } from '../model/common.dto';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  userId: number;
  users;

  constructor(private http:HttpClient) {}

  userAleadyAdded(): boolean {
    return true;
  }

  getUsers() {
    this.http.get(this.baseUrl).subscribe((res)=>{
      console.log(res);
      this.users = res;
    })
  }

  getUserDetail(id: number) {
    console.log(id);

    return this.http.get(this.baseUrl + '/' + id);
  }

  addUser(user: UserDetail): void {}

  deleteUser(id: number): void {}
}
