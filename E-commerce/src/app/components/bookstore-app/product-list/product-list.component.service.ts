import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Book } from "./model/book";


@Injectable()

export class BooksService{
    private url= 'https://api.itbook.store/1.0/new'

    httpOptions = {
        Headers: new HttpHeaders({'content-type':'application/json'})
    }

    constructor(private http: HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }
}