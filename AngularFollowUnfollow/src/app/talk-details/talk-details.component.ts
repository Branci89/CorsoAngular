import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-talk-details',
  templateUrl: './talk-details.component.html',
  styleUrls: ['./talk-details.component.scss']
})
export class TalkDetailsComponent implements OnInit {
  @Input() talk;
   

  constructor() {
 

   }

  ngOnInit() {
  }

    premi(){
      if(this.talk.scritta == "follow"){
        this.talk.scritta = 'unfollow'
      }else{
        this.talk.scritta = 'follow'
      }
      /*
    if(this.talk.flag){
      this.talk.flag= false;
      this.scritta="Unfollow";
    }
    else{
      this.talk.flag= true;
      this.scritta="Follow";
    }
*/

  }

}
