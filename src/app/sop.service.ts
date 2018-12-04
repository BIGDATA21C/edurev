import { Injectable } from '@angular/core';


/* This creates a class and methds to hit Server*/
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SopService {

  constructor(private http: Http) { }
   
    
  // add Sop method in this Service User Agent Headers are required to get recognition pass options:headers
  addSop(newSop) {

    console.log("newSop: "+newSop.category); 
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/sop', newSop, { headers: headers })
      .pipe(map(res => res.json())); 

  }
     
  getSops() {
    console.log("SopService: hitting Database to getSops");
    return this.http.get('http://localhost:3000/api/sops')
      .pipe(map(res => res.json()));
  }

  deleteSop(id) {
    return this.http.delete('http://localhost:3000/api/deletesop/' + id)
      .pipe(map(res => res.json()));
  }

  
 }