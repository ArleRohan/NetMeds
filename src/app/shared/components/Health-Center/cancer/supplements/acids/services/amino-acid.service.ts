import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AminoAcidService {
  private apiUrl = 'http://localhost:3000/aminoAcidProducts';

  constructor(private http: HttpClient) {}

 getAminoProducts(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/aminoAcidProducts');
}
}
