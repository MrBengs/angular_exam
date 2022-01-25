import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../modeles/statistique';

@Component({
  selector: 'app-one-stat',
  templateUrl: './one-stat.component.html',
  styleUrls: ['./one-stat.component.css']
})
export class OneStatComponent implements OnInit {
@Input() stats!:Statistique

  constructor() { }

  ngOnInit(): void {
  }

}
