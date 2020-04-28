import {Component, OnInit} from '@angular/core';
import { gql} from 'apollo-angular-boost';
import {Observable} from 'rxjs';
import {pets} from './graphql/schema';
import { Apollo } from 'apollo-angular-boost';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shelter-ng';
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
