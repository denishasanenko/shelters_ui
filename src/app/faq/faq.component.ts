import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Apollo, gql} from 'apollo-angular-boost';
import {map} from 'rxjs/operators';
import {pets} from '../graphql/schema';

@Component({
  selector: 'app-main',
  templateUrl: 'faq.component.html',
  styleUrls: ['faq.component.scss']
})
export class FaqComponent implements OnInit{


  constructor(private apollo: Apollo) {}

  ngOnInit() {
  }
}
