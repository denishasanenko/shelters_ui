import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo, gql} from 'apollo-angular-boost';
import {map} from 'rxjs/operators';
import {pets} from '../graphql/schema';

@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit{

  pets: Observable<pets>;
  petsQuery = gql`
    query pets{
      pets {
        id
        name
        picture
        shelter {
          id
          name
        }
      }
    }`;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.pets = this.apollo.watchQuery<pets>({query: this.petsQuery}).valueChanges.pipe(map(shelter => shelter.data));
  }
}
