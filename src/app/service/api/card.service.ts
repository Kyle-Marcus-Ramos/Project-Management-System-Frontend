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
import { SaveKanbanRequestDTO } from 'src/app/model/api/kanban';



@Injectable()
export class CardService {
    private _url = "https://localhost:5001/api/Card/SaveCard";
    private getcardurl = "https://localhost:5001/api/Card/GetCardByProjectId";
    private projectId: number;

    // private _getLogin = "api/Account/GetAccountByUsernamePassword";
    constructor(private _http: HttpClient) {

    }


    SaveCard(account: SaveKanbanRequestDTO): Observable<any> {

        // var headerOptions = new Headers({ 'Content-Type': '"application/json' });
        // var requestOption = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        // return this._http.post(this._url + this._getLogin, account);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this._http.post(this._url, account, httpOptions);
        // return this._http.get(this._url);

    }

    GetCards(projectId): Observable<any> {

        // var headerOptions = new Headers({ 'Content-Type': '"application/json' });
        // var requestOption = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        // return this._http.post(this._url + this._getLogin, account);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        // console.log(projectId);
        return this._http.post(this.getcardurl, projectId, httpOptions);
        // return this._http.get(this._url);

    }

}