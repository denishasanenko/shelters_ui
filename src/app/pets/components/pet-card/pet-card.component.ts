import {Component, Input} from '@angular/core';
import {PetGender} from '../../configs/pet-gender.enum';

@Component({
  selector: 'app-pet-card',
  templateUrl: 'pet-card.component.html',
  styleUrls: ['pet-card.component.scss']
})
export class PetCardComponent {
  @Input() pet;
  public petGender = PetGender;
}
