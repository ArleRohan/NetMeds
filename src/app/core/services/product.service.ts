import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getAllProducts(key:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${key}`);
  }

  getProductById(type: string, id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${type}`).pipe(
      map(res => res.items.find((item: any) => item.id == id))
    );
  }

//  getMergedData(cat1: string, cat2: string): Observable<any[]> {
//   const req1 = this.http.get<any[]>(`${this.apiUrl}/${cat1}`);
//   const req2 = this.http.get<any[]>(`${this.apiUrl}/${cat2}`);

//   return forkJoin([req1, req2]).pipe(
//     map(([res1, res2]) => [...res1, ...res2])  // Merge the two arrays
//   );
// }

getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
