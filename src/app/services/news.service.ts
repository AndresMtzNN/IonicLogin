import { Injectable } from '@angular/core';
import { newsApiConfig } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = newsApiConfig.apiurl;
const API_KEY = newsApiConfig.apiKey;

@Injectable({
    providedIn:'root'
})

export class NewService{
    currentArticle: any;
    constructor(private http: HttpClient){

    }

    getData(url){
        return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`)
    }

}


