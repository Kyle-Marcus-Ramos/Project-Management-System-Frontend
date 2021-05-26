import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, } from 'rxjs';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { throwError } from 'rxjs';
import { GetDashboardDTO } from 'src/app/model/api/dashboard';



@Injectable()
export class DashboardService {
    private _url = "https://localhost:5001/api/Project/GetProjectByAccountId";
    // private _getLogin = "api/Account/GetAccountByUsernamePassword";
    constructor(private _http: HttpClient) {

    }


    getProjects(dashboard: GetDashboardDTO): Observable<any> {
        // console.log(dashboard.accountId);
        // var headerOptions = new Headers({ 'Content-Type': '"application/json' });
        // var requestOption = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        // return this._http.post(this._url + this._getLogin, account);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this._http.post(this._url, dashboard, httpOptions);
        // return this._http.get(this._url);

    }

}