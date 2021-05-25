import { Component, OnInit } from '@angular/core';
import { PaperService } from '../paper.service';
import {paperes} from '../paper';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: [ './view.component.css' ]
})
export class ViewComponent implements OnInit {
  paperes: paperes[] = [];

  constructor(private paperService: PaperService) { }

  ngOnInit() {
    this.getPaperes();
  }

  getPaperes(): void {
    this.paperService.getPaperes()
      .subscribe(paperes => this.paperes = paperes.slice(1, 5));
  }
}