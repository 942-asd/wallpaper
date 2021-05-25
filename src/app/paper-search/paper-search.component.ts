import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { paperes } from '../paper';
import { PaperService } from '../paper.service';
@Component({
  selector: 'app-paper-search',
  templateUrl: './paper-search.component.html',
  styleUrls: [ './paper-search.component.css' ]
})
export class PaperSearchComponent implements OnInit {
  paperes$!: Observable<paperes[]>;
  private searchTerms = new Subject<string>();

  constructor(private PaperService: PaperService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.paperes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.PaperService.searchpaperes(term)),
    );
    this.paperes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
    
      // ignore new term if same as previous term
      distinctUntilChanged(),
    
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.PaperService.searchpaperes(term)),
    );
  }
}