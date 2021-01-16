import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: () => console.log('log!')
      }
    ]
  }
  constructor() {

  }

  ngOnInit() {
  }

  cambioFecha(ev: any) {
    console.log(ev);
    console.log(new Date(ev.detail.value));
  }
}