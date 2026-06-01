import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso, Matricula } from '../models/matriculas.interface';

@Injectable({ providedIn: 'root' })
export class MatriculasService {
  private http = inject(HttpClient);
  // URL base limpia (sin recursos finales)
  private baseUrl = 'https://pc2-backend-ohda.onrender.com/api/matriculas';

  // Obtener cursos correctamente
  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.baseUrl}/cursos`);
  }

  // Obtener matrículas (necesario para la lista)
  obtenerMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.baseUrl}/matriculas`);
  }

  // Registrar matrícula
  solicitarMatricula(matricula: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/matriculas`, matricula);
  }
}