import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes(environment.serverURL)) {
            // add authorization header with jwt token if available
            let currentUser = this.authenticationService.currentUserValue;
            // if (currentUser && currentUser.token) {
            if (currentUser) {
                request = request.clone({
                    setHeaders: {
                        // Authorization: `Bearer ${currentUser.token}`
                        Authorization: `Bearer ${currentUser}`
                    }
                });
            }
        }

        return next.handle(request);
    }
}