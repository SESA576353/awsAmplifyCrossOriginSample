import { Component } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-cross-origin-sample2';
  public userList: any;

  async ngOnInit() {
    let userInit = {
      headers: {}
    }
    await API.get("usersdev", "/users", userInit).then(response => {
      this.userList = response;
      console.log('Response :::: ', this.userList);

    }).catch(error => {
      console.error(error);

    })
  }
}
