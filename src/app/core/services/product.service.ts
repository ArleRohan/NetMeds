import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllAyurvedicProducts(key:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${key}`);
  }

  getAyurvedicProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
