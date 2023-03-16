import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';


  form_fields = [
    {
      "type": "input",
      "label": "email",
      "font_size": "",
      "placeholder": "Username"
    },
    {
      "type": "password",
      "label": "password",
      "font_size": "",
      "placeholder": "Password"
    }
  ];


  getForm(e: any) {
    console.log(e);
  }
}
