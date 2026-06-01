import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {
  private http = inject(HttpClient);
  
  // CORRECCIÓN: La base debe terminar en /api
  private baseUrl = 'https://pc2-backend-ohda.onrender.com/api';

  // Obtener productos: URL resultante -> .../api/productos
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
  }

  // Registrar pedido: URL resultante -> .../api/pedidos
  crearPedido(pedido: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pedidos`, pedido);
  }
}