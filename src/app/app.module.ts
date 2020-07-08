import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {PetsModule} from './pets/pets.module';
import {GraphqlModule} from './graphql/graphql.module';
import {SignModule} from './sign/sign.module';
import {FaqComponent} from './faq/faq.component';
import {MainComponent} from './main/main.component';
import {HowComponent} from './how/how.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FaqComponent,
    HowComponent
  ],
  imports: [
    PetsModule,
    SignModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    GraphqlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
