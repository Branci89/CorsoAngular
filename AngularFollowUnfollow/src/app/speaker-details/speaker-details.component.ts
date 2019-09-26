import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss']
})
export class SpeakerDetailsComponent implements OnInit {
  @Input() speaker: any;
  constructor() { }

  ngOnInit() {
  }

}
