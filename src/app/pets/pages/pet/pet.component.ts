import {Component, OnInit} from '@angular/core';
import {PetsService} from '../../services/pets.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pets',
  templateUrl: 'pet.component.html',
  styleUrls: ['pet.component.scss']
})
export class PetComponent implements OnInit{

  pet;

  constructor(private petsService: PetsService, private activatedRoute: ActivatedRoute) {}

  async ngOnInit() {
    const alias = this.activatedRoute.snapshot.params.id;
    this.petsService.getPet(alias).subscribe(pet => {
      this.pet = pet.pet;
    });
  }
}
