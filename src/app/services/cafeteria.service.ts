import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  private http = inject(HttpClient);
  // Definimos la base una sola vez
  private baseUrl = 'https://pc2-backend-ohda.onrender.com/api/productos';

  // Obtener productos usando la base
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
  }

  // Registrar pedido usando la base
  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pedidos`, pedido);
  }
}