import { RouterConfig, provideRouter } from "@angular/router"
import {PersonComponent } from "./person/person.component"
import { FaceComponent } from "./face/face.component"
import { PersonGroupComponent } from "./person-group/person-group.component"

export const routes: RouterConfig = [
     {
     path: '',
     redirectTo: '/welcome',
     pathMatch: 'full'
   },
    {path: "welcome", component: PersonGroupComponent },
    {path: "person/:id", component: PersonComponent }
]

export const appRouterProviders = [
    provideRouter(routes)
]