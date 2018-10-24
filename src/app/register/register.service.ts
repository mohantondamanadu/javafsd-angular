import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApplicationSettings}  from '../appsettings';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class RegisterService {
    registerurl: string = ApplicationSettings.registerurl;
    constructor(private http: HttpClient, private router:Router) {
       
       }

    public registerUser(user) {
        return this.http.post(`${this.registerurl}/${"register"}`, user, {responseType: 'text'});
    }
}

