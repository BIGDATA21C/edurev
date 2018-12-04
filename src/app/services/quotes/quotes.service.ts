import { Injectable } from '@angular/core';

/* This creates a class and methds to hit Server*/
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: Http) { }

  // Add Quote to the DB
  addQuote(newQuote) {
  
    // console.log("newQuote: "+newQuote.quotedesc); 
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/quote', newQuote, { headers: headers })
      .pipe(map(res => res.json())); 
}

  getQuotes() {
    // console.log("QuoteService: hitting Database to getQuotes");
    return this.http.get('http://localhost:3000/api/readquotes')
      .pipe(map(res => res.json()));
  }

  deleteQuote(id) {
    return this.http.delete('http://localhost:3000/api/deletequote/' + id)
      .pipe(map(res => res.json()));
  }



}
