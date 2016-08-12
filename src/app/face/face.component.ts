import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { FaceService } from "../face.service"

class IFace {
  image_link: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-face',
  templateUrl: 'face.component.html',
  styleUrls: ['face.component.css'],
  providers: [FaceService]
})
export class FaceComponent implements OnInit {
  errorMessage: string;
  faces: IFace[];
  face: IFace;
  personId: string;

  constructor(
    private _faceService: FaceService,
    private route: ActivatedRoute    
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.personId = params["id"]
    )
    this.getFaces();
  }

  getFaces(){
    this._faceService.getFaces(this.personId)
      .subscribe(faces => this.faces = faces,
        error => this.errorMessage = <any>error);
  }

  new_face(image_link: string) {
    this._faceService.add_face(image_link, this.personId)
      .subscribe(face => this.faces.push(face),
      error => this.errorMessage = <any>error)
  }
}
