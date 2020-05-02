import {NgModule} from '@angular/core';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignInComponent],
})
export class SignModule {}
