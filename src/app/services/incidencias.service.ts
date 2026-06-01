import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incidencia } from '../models/incidencias.interface';

@Injectable({ providedIn: 'root' })
export class IncidenciasService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pc2-backend-ohda.onrender.com/api';

  obtenerIncidencias(): Observable<Incidencia[]> {
    return this.http.get<Incidencia[]>(`${this.baseUrl}/incidencias`);
  }

  crearIncidencia(incidencia: Incidencia): Observable<Incidencia> {
    return this.http.post<Incidencia>(`${this.baseUrl}/incidencias`, incidencia);
  }

  actualizarEstado(id: number, estado: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/incidencias/${id}/estados`, { estado });
  }
}