import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PetsComponent} from './pets/pages/pets/pets.component';
import {SignInComponent} from './sign/pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'pets',
    component: PetsComponent
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
