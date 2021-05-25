import { Component, OnInit } from '@angular/core';
import { paperes } from '../paper';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PaperService } from '../paper.service';
import { PAPER } from '../mock-paper';
@Component({
  selector: 'app-wall-detail',
  templateUrl: './wall-detail.component.html',
  styleUrls: ['./wall-detail.component.css']
})
export class WallDetailComponent implements OnInit {
 paper : paperes | undefined;


    constructor(
      private route: ActivatedRoute,
      private paperService: PaperService,
      private location: Location
    ) {}
  ngOnInit(): void {
  this. getPaper();
}
getPaper(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.paperService. getPaper(id)
    .subscribe(paper => this.paper = paper);
}
goBack(): void {
  this.location.back();
}
save(): void {
  if (this.paper) {
    this.paperService.updatepaper(this.paper)
      .subscribe(() => this.goBack());
  }
}
}
