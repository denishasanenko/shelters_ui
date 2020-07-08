import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo, gql} from 'apollo-angular-boost';
import {map} from 'rxjs/operators';
import {pets} from '../../../graphql/schema';
import {PetsService} from '../../services/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: 'pets.component.html',
  styleUrls: ['pets.component.scss']
})
export class PetsComponent implements OnInit{

  pets: Observable<pets>;

  constructor(private petsService: PetsService) {}

  ngOnInit() {
    this.pets = this.petsService.getPets();
  }
}
