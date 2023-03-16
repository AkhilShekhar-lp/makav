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
      "label": "first name",
    },
    {
      "type": "input",
      "label": "email",
    },
    {
      "type": "password",
      "label": "password",
    }
  ];


  getForm(e: any) {
    console.log(e);
  }
}
