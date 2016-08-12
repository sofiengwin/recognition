import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES} from "@angular/router"
import { NgForm }    from '@angular/forms';
import { PersonGroupService } from "../person-group.service"
// import { Person } from "../person"


class Person {
  name: string;
  user_data: string;
}
@Component({
  moduleId: module.id,
  selector: 'app-person-group',
  providers: [PersonGroupService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'person-group.component.html',
  styleUrls: ['person-group.component.css']
})
export class PersonGroupComponent {
  persons: Person[];
  errorMessage: string;
  person: Person;
  services = "eioajfeoajfioaewhfoawef";
  to_identify: string;
  identified_person: any;

  constructor(private _personGroupService: PersonGroupService, private router: Router) { }

  ngOnInit() {
    this.get_persons()
  }

  get_persons(){
    this._personGroupService.get_persons()
      .subscribe(persons => this.persons = persons,
      error => this.errorMessage = <any>error
      );
  }

  new_person(name, user_data){   
   console.log(name, user_data);
    if (!name) { return; }
    this._personGroupService.add_person(name, user_data)
      .subscribe(
        person => {
          console.log(person, 'another person')
          this.persons.push(person)
        },
        error => this.errorMessage = <any>error
      );
      alert("person added")
  }

  identify_face(image_link: string){
    this.to_identify = image_link;
    this._personGroupService.identify(image_link)
      .subscribe(
        identified_person => this.identified_person = identified_person,
        error => this.errorMessage = <any>error
        )
    console.log(this.identified_person);
    
  }

}
