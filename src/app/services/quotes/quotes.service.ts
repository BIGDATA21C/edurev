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
    console.log("QuoteService: hitting Database to getQuotes");
    return this.http.get('http://localhost:3000/api/readquotes')
      .pipe(map(res => res.json()));
  }

  updateQuote(id, data) {
 
  console.log("Before hitting databse from quote.service.ts");
  return this.http.put('http://localhost:3000/api/updatequotes/'+id, data).pipe(map(res => res.json()));

   // return this.http.put('http://localhost:3000/api/updatequotes/'+id, data).subscribe(res => {
  //       let id = res['_id'];
  //       console.log('Success in quotes.service.ts');
  //  });
// https://www.youtube.com/watch?v=UYh6EvpQquw | https://www.youtube.com/watch?v=GVvZsr12WjE
  }

  deleteQuote(id) {
    return this.http.delete('http://localhost:3000/api/deletequote/' + id)
      .pipe(map(res => res.json()));
  }



}
