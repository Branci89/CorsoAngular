import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {

  talks_lista = [
    {
      event_name: "Angular Today and Tomorrow",
      author: "John Doe",
      topic: "Front-End",
      description: "Ubi est fortis tata? Est teres classis, cesaris.",
      scritta : 'follow'
    },
    {
      event_name: "How To Hack an Angular app?",
      author: "Jim Jones ",
      topic: "Front-End",
      description: "Why does the lubber die?",
      scritta : 'unfollow'
    },
    {
      event_name: "Docker in Production",
      author: "Ringo Starr",
      topic: "Back-End",
      description: "Never trade a kraken.",
      scritta : 'follow'
    },
    {
      event_name: "Angular vs Vue",
      author: "Chuck Norris",
      topic: "Front-End",
      description: "Yellow fever, love, and malaria..",
      scritta : 'unfollow'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
