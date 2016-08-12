import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { PersonService } from "../person.service"
import { FaceComponent } from "../face/face.component"


interface Person {
    name: string;
    user_data: string;
    personId: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-person',
  templateUrl: 'person.component.html',
  styleUrls: ['person.component.css'],
  providers: [PersonService],
  directives: [FaceComponent]
})
export class PersonComponent implements OnInit {
  private sub: any;
  person: Person = {
    name: "test name",
    user_data: "user_data",
    personId: "1"
  };
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
    
  ){
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
      let personId = params['id']; // (+) converts string 'id' to a number
      this.getPerson(personId)      
    });
  }

  getPerson(personId: string){
    this.personService.getPerson(personId)
      .subscribe(
        person => this.person = person,
        error => this.errorMessage = <any>error
      )
  }

}
