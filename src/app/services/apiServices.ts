import {Injectable, Component, OnInit} from '@angular/core'
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BASEAPI } from '../constant/constant.apis';


@Injectable()
export class apiService implements OnInit{
	private URL : string = BASEAPI.BASE_URL;
	constructor(private http : Http){

	}
	ngOnInit(){
		
	}
	getHeaders(){
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept-Language', 'en');
		return headers;
	}
	get(URL:string){
		let headers = this.getHeaders();
		let _url = this.URL + URL;
		return this.http.get(_url, { headers: headers})
		.map((response : Response) => response.json())
		.catch(this._errorHandler);
	}
	post(URL:string, data:any){
		let headers = this.getHeaders();
		let _url = this.URL + URL;
		return this.http.post(_url, data, { headers: headers})
		.map((response : Response) => response.json())
		.catch(this._errorHandler);
	}
	_errorHandler(error:  Response){
		return Observable.throw(error || "Server Error");
	}
}

