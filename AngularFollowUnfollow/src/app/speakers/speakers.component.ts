import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  speakers_lista = [
    {
      name: "Pinco",
      surname: "Pallo",
      country: "Moldavia",
      age: "42"
    },
    {
      name: "Jack",
      surname: "Sparrow",
      country: "Cayman Islands",
      age: "17"
    },
    {
      name: "Jesus",
      surname: "Christ",
      country: "Palestine",
      age: "33"
    }
  ];

}
