import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/matriculas.interface';

@Injectable({ providedIn: 'root' })
export class MatriculasService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pc2-backend-ohda.onrender.com/api';

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.baseUrl}/cursos`);
  }

  solicitarMatricula(matricula: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/matriculas`, matricula);
  }
}