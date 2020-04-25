import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {PetsComponent} from './pets/pets.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
