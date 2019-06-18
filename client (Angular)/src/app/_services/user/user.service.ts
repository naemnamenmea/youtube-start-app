import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<any[]>(`${environment.serverURL}/api/users`);
  }

  register(user: User) {
    return this.http.post(`${environment.serverURL}/api/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.serverURL}/api/users/${id}`);
  }
}
