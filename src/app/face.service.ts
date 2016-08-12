import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http"
import { Observable } from "rxjs/Observable"

@Injectable()
export class FaceService {
    _api = "http://localhost:3000"
  constructor(private _http: Http) { }

  add_face(image_link: string, personId: string): Observable<any> {
    let body = JSON.stringify({ image_link })
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let api_path = this._api + "/person-groups/theprox/persons/" + personId + "/faces"

    return this._http.post(api_path, body, options)
      .map((response: Response) => <any> response.json())
      .do(data => console.log("New Face" + JSON.stringify(data)))
      .catch(this.handleError)
  }

  getFaces(personId: string) {
    let api_path = this._api + "/person-groups/theprox/persons/" + personId + "/faces"
    return this._http.get(api_path)
      .map((response: Response) => <any> response.json())
      .do(data => console.log("Person Faces" + JSON.stringify(data)))
      .catch(this.handleError)
  }

  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || "Server Error"); 
  }
}
