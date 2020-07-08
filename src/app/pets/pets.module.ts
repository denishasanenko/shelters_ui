import {NgModule} from '@angular/core';
import {PetsComponent} from './pages/pets/pets.component';
import {PetCardComponent} from './components/pet-card/pet-card.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PetComponent} from './pages/pet/pet.component';
import {PetsService} from './services/pets.service';

@NgModule({
  declarations: [PetsComponent, PetComponent, PetCardComponent],
  providers: [PetsService],
  exports: [PetCardComponent],
  imports: [CommonModule, RouterModule]
})
export class PetsModule {

}
