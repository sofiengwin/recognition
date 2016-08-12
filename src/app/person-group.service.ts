import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from "@angular/http"
import { Observable } from "rxjs/Observable"
import {PersonGroup } from "./person-group"
import {Person} from "./person"


@Injectable()
export class PersonGroupService {
  _api = "http://localhost:3000"
  constructor(private http: Http) { }
  get_persons(): Observable<Person[]> {
    return this.http.get(this._api + "/persons")
      .map((response: Response) => <Person[]> response.json())
      .do(data => console.log("All" + JSON.stringify(data)))
      .catch(this.handleError);
  }

  add_person(name: string, userData: string){
    let body = JSON.stringify({name, userData})
    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let api_path = this._api + "/person-groups/theprox/new-person"
    return this.http.post(api_path, body, options)
      .map((response: Response) => <any> response.json())
      .do(data => console.log("New person" + JSON.stringify(data)))
      .catch(this.handleError)
  }

  identify(image_link: string): Observable<any>{
    let body = JSON.stringify({ image_link })
    console.log(body)
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let api_path = this._api + "/person-groups/theprox/identify"
    return this.http.post(api_path, body, options)
      .map((response: Response) => <any> response.json())
      .do(data => console.log("Identify" + JSON.stringify(data)))
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.log(error)
    return Observable.throw(error.json().error || "Server Error");
    
  }
}
