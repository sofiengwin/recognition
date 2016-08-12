import { Injectable } from '@angular/core';
import { Http, Response, Headers  } from "@angular/http"
import { Observable } from "rxjs/Observable"
import {Person } from "./person"

@Injectable()
export class PersonService {
  _api = "http://localhost:3000"

  constructor(
    private http: Http
  ) { }

  getPerson(personId): Observable<Person> {
    return this.http.get(this._api + "/person-groups/theprox/persons/" + personId)
      .map((response: Response) => <any> response.json())
      .do(data => console.log(JSON.stringify(data),'logs'))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log(error)
    return Observable.throw(error.json().error || "Server Error"); 
  }
}
