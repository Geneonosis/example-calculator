import { Component } from '@angular/core';
import { helpers } from './helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hello:string = '';
  public testButton: boolean = false;

  constructor(public helper:helpers){

  }

  
}
