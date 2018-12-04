import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: Http) { }

  getItems(){
    return new Promise(resolve => {
        this.http.get('../assets/data.json').subscribe(res => resolve(res.json()));
        // this.http.get('../assets/data.json').pipe(map(res => resolve(res.json())));
    });
  }
  // return this.http.get('http://localhost:3000/api/contacts')
  // .pipe(map(res => res.json()));

}

