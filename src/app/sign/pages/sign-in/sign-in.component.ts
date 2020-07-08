import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Apollo, gql} from 'apollo-angular-boost';
import {signIn} from '../../../graphql/schema';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  public form = new FormGroup({
    email: new FormControl('', ),
    password: new FormControl('')
  });
  signInMutation = gql`
    mutation signIn($input: SignInput){
      signIn(input: $input)
    }`;

  constructor(private apollo: Apollo) {
  }

  public async signIn() {
    try {
      const response = (
        await this.apollo
          .mutate({mutation: this.signInMutation, variables: {input: this.form.value}})
          .toPromise()
      ).data as signIn;
      const token = response.signIn;
      console.log(token);
    } catch (error) {
      this.form.setErrors({email: error});
    }
  }
}
