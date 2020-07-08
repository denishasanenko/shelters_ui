import {Injectable} from '@angular/core';
import {Apollo, gql} from 'apollo-angular-boost';
import {map} from 'rxjs/operators';
import {pet, pets} from '../../graphql/schema';

@Injectable()
export class PetsService {

  constructor(private apollo: Apollo) {
  }

  getPets() {
    const petsQuery = gql`
      query pets{
        pets {
          id
          name
          picture
          gender
          age
          shelter {
            id
            name
          }
        }
      }`;
    return this.apollo.watchQuery<pets>({query: petsQuery}).valueChanges.pipe(map(shelter => shelter.data))
  }

  getPet(alias: string) {
    const petQuery = gql`
      query pet {
        pet (id:"${alias}") {
          id
          name
          picture
          gender
          age
          shelter {
            id
            name
          }
        }
      }`;
    return this.apollo.watchQuery<pet>({query: petQuery}).valueChanges.pipe(map(shelter => shelter.data))
  }

}
