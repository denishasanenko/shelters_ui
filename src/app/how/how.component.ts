import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo, gql} from 'apollo-angular-boost';
import {map} from 'rxjs/operators';
import {pets} from '../graphql/schema';

@Component({
  selector: 'app-main',
  templateUrl: 'how.component.html',
  styleUrls: ['how.component.scss']
})
export class HowComponent implements OnInit{


  constructor(private apollo: Apollo) {}

  ngOnInit() {
  }
}
