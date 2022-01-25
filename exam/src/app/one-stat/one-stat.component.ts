import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Statistique } from '../modeles/statistique';

@Component({
  selector: 'app-one-stat',
  templateUrl: './one-stat.component.html',
  styleUrls: ['./one-stat.component.css']
})
export class OneStatComponent implements OnInit {
@Input() stats!:Statistique
@Output() demandeSupp: EventEmitter<any>;
  constructor() { 
    this.demandeSupp = new EventEmitter();
  }

  ngOnInit(): void {
  }
  boutonActionner(){
    this.demandeSupp.emit();
  }
}
