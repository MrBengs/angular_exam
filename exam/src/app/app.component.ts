import { Component } from '@angular/core';
import { Statistique } from './modeles/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon:Statistique = new Statistique("number1", "pokemon rouge", "151");
  tekken:Statistique = new Statistique("number2", "tekken7", "8P");
  mario:Statistique = new Statistique("number3", "mario kart", "16P");
  tabStats: Array<Statistique> = [this.pokemon, this.tekken, this.mario];
}
