import { Component, OnInit } from '@angular/core';
import {paperes} from '../paper';
import {PAPER} from '../mock-paper'
import { PaperService } from '../paper.service';
import { MessageService } from '../message.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-walles',
  templateUrl: './walles.component.html',
  styleUrls: ['./walles.component.css']
})
export class WallesComponent implements OnInit {
  // paperes = PAPER;
  paper: paperes[] = [];
  constructor(private paperService: PaperService) { }
  
  
  ngOnInit(): void{
    this.getPaperes();
  }
  getPaperes(): void {
    this.paperService.getPaperes()
      .subscribe(paper => this.paper = paper);
  }
  delete(paper: paperes): void {
    this.paper = this.paper.filter(h => h !== paper);
    this.paperService.deletepaper(paper.id).subscribe();
  }

}
