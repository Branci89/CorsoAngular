import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corso Speciale';
  num_Click = 0;
  
  contaclick = function(){
    this.num_Click++;
  }
}
  
