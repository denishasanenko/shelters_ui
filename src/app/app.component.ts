import {Component, OnInit} from '@angular/core';
import {ApolloBoost, gql} from 'apollo-angular-boost';
import {Observable} from 'rxjs';
import {allShelters} from './graphql/schema';
import { Apollo } from 'apollo-angular-boost';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shelter-ng';
  shelters: Observable<allShelters>;
  petsQuery = gql`
  query allShelters{
    allShelters {
      id
      name
      category
      created_at
    }
  }`;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.shelters = this.apollo.watchQuery<allShelters>({query: this.petsQuery}).valueChanges.pipe(map(shelter => shelter.data));
  }

}
