import { Component } from '@angular/core';
import {StocksCompoent} from './stocks.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angualar 2';
  today=new Date;
}

