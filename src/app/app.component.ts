import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    public username: string;
    public isUserLoggedIn: boolean;

    constructor() {
      this.isUserLoggedIn =  false;
    }

    onlogin() {
      this.isUserLoggedIn =  true;
      this.username = "Suresha Jayanna"
    }

    onlogout() {
      this.isUserLoggedIn = false;
    }
}
