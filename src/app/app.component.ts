import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http"
import { ROUTER_DIRECTIVES } from "@angular/router"
import { PersonGroupComponent } from "./person-group/person-group.component"
import "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent {
  title = 'app works!';
}
