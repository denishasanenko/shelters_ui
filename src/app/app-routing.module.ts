import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetsComponent} from './pets/pages/pets/pets.component';
import {SignInComponent} from './sign/pages/sign-in/sign-in.component';
import {FaqComponent} from './faq/faq.component';
import {MainComponent} from './main/main.component';
import {HowComponent} from './how/how.component';
import {PetComponent} from './pets/pages/pet/pet.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'how',
    component: HowComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  },
  {
    path: 'pets/:id',
    component: PetComponent
  },
  {
    path: 'sign',
    children: [
      {
        path: 'in',
        component: SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
