import { Component } from '@angular/core';
import { Statistique } from './modeles/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tabStats:Array<Statistique> = [new Statistique ("number1","pokemon rouge","151"),
                                   new Statistique ("number2","tekken7","8P")];
}

