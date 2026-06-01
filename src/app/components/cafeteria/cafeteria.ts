import { Component, OnInit, inject } from '@angular/core';
import { CafeteriaService } from '../../services/cafeteria.service';
import { Producto } from '../../models/productos.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cafeteria.html'
})
export class CafeteriaComponent implements OnInit {
  private cafeteriaService = inject(CafeteriaService);

  productos: Producto[] = [];

  // CORRECCIÓN: Definimos la propiedad 'categoria' aquí
  nuevoPedido = {
    estudiante: '',
    productoId: null as number | null,
    categoria: '', 
    cantidad: 1,
    observacion: ''
  };

  ngOnInit() {
    this.listarProductos();
  }

  listarProductos() {
    this.cafeteriaService.obtenerProductos().subscribe({
      next: (res) => this.productos = res,
      error: (err) => console.error('Error al listar:', err)
    });
  }

  registrar() {
    // CORRECCIÓN: Validamos que también se haya seleccionado una categoría
    if (!this.nuevoPedido.estudiante || !this.nuevoPedido.categoria || !this.nuevoPedido.productoId || this.nuevoPedido.cantidad <= 0) {
      alert('⚠️ Por favor completa los campos: Estudiante, Categoría, Producto y Cantidad.');
      return;
    }

    this.cafeteriaService.crearPedido(this.nuevoPedido).subscribe({
      next: () => {
        alert('✅ Pedido registrado con éxito');
        this.resetFormulario();
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert('❌ Error al registrar el pedido.');
      }
    });
  }

  private resetFormulario() {
    // CORRECCIÓN: Reiniciamos la categoría como vacío
    this.nuevoPedido = {
      estudiante: '',
      productoId: null,
      categoria: '',
      cantidad: 1,
      observacion: ''
    };
  }
}