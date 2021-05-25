import { Component, OnInit } from '@angular/core';
import { paperes } from '../paper';
import { PaperService } from '../paper.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  /** POST: add a new hero to the server */

  // constructor() { }
  paper: paperes[] = [];
  constructor(private paperService: PaperService) { }

  ngOnInit(): void {
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.paperService.addpaper({ name } as paperes)
      .subscribe(paper => {
        this.paper.push(paper);
      });
  }
  
  }



