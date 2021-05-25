import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { paperes } from './paper';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PaperService {

  private paperesUrl = 'api/paperes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET paperes from the server */
  getPaperes(): Observable<paperes[]> {
    return this.http.get<paperes[]>(this.paperesUrl)
      .pipe(
        tap(_ => this.log('fetched paperes')),
        catchError(this.handleError<paperes[]>('getpaperes', []))
      );
  }

  /** GET paper by id. Return `undefined` when id not found */
  getpaperNo404<Data>(id: number): Observable<paperes> {
    const url = `${this.paperesUrl}/?id=${id}`;
    return this.http.get<paperes[]>(url)
      .pipe(
        map(paperes => paperes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} paper id=${id}`);
        }),
        catchError(this.handleError<paperes>(`getpaper id=${id}`))
      );
  }
  addpaper(paper: paperes): Observable<paperes> {
    return this.http.post<paperes>(this.paperesUrl, paper, this.httpOptions).pipe(
      tap((newpaper: paperes) => this.log(`added paper w/ id=${newpaper.id}`)),
      catchError(this.handleError<paperes>('addpaper'))
    );
  }
  /** GET paper by id. Will 404 if id not found */
  getPaper(id: number): Observable<paperes> {
    const url = `${this.paperesUrl}/${id}`;
    return this.http.get<paperes>(url).pipe(
      tap(_ => this.log(`编号 id=${id}`)),
      catchError(this.handleError<paperes>(`getpaper id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
updatepaper(paper: paperes): Observable<any> {
  return this.http.put(this.paperesUrl, paper, this.httpOptions).pipe(
    tap(_ => this.log(`updated paper id=${paper.id}`)),
    catchError(this.handleError<any>('updatepaper'))
  );
  /** DELETE: delete the paper from the server */

}
deletepaper(id: number): Observable<paperes> {
  const url = `${this.paperesUrl}/${id}`;

  return this.http.delete<paperes>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted paper id=${id}`)),
    catchError(this.handleError<paperes>('deletepaper'))
  );
}

/* GET paperes whose name contains search term */
searchpaperes(term: string): Observable<paperes[]> {
  if (!term.trim()) {
    // if not search term, return empty paper array.
    return of([]);
  }
  return this.http.get<paperes[]>(`${this.paperesUrl}/?name=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found paperes matching "${term}"`) :
       this.log(`no paperes matching "${term}"`)),
    catchError(this.handleError<paperes[]>('searchpaperes', []))
  );
}
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a paperService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}