import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  words: string [] = [];

  entry: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addWord() {
    this.words.push(this.entry);
  }

}
