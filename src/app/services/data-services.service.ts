import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url);
  }
  postData(url, data) {
    const body = JSON.stringify(data);
    return this.http.post(url, body, httpOptions);
  }

  putData(url, data) {
    const body = JSON.stringify(data);
    return this.http.put(url + data.id, body, httpOptions);
  }

  deleteData(url, data) {
    return this.http.delete(url + data.id);
  }
}
