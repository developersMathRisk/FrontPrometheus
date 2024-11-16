import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private apiServeURL = environment.apiBaseURL;
  private http!: HttpClient;

  // constructor(private http: HttpClient) { }

  public getBonosActivos(): Observable<Object[]>{
    return this.http.get<Object[]>(`${this.apiServeURL}/bono_ns/listarBonosNSActivos`);
  }
}
