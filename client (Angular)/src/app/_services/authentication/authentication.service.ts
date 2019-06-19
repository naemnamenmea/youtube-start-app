import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(username, password) {
    var user = {
      Username: username,
      Password: password
    } as User;
    const options: Object = {
      responseType: 'text'
    }
    return this.http.post<any>(`${environment.serverURL}/api/users/login`, user, options)
      .pipe(map(token => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes        
        localStorage.setItem('currentUser', token as string);
        this.currentUserSubject.next(token);
        return token;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}