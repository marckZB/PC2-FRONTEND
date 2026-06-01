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

  // Estado del formulario
  nuevoPedido = {
    estudiante: '',
    productoId: null as number | null,
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
    if (!this.nuevoPedido.estudiante || !this.nuevoPedido.productoId || this.nuevoPedido.cantidad <= 0) {
      alert('⚠️ Por favor completa los campos: Estudiante, Producto y Cantidad.');
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
    this.nuevoPedido = {
      estudiante: '',
      productoId: null,
      cantidad: 1,
      observacion: ''
    };
  }
}