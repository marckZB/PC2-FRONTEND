import { Component, inject } from '@angular/core';
import { CafeteriaService } from '../../services/cafeteria.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cafeteria.html'
})
export class CafeteriaComponent {
  // Inyección del servicio
  private cafeteriaService = inject(CafeteriaService);

  // Modelo del formulario
  // productoId ahora guarda el string (Bebidas, Snacks, Almuerzos)
  nuevoPedido = {
    estudiante: '',
    productoId: '', 
    cantidad: 1,
    observacion: ''
  };

  // Método para registrar el pedido
  registrar() {
    // Validación básica de campos
    if (!this.nuevoPedido.estudiante || !this.nuevoPedido.productoId || this.nuevoPedido.cantidad <= 0) {
      alert('⚠️ Por favor completa el Estudiante, la Categoría y la Cantidad.');
      return;
    }

    // Llamada al servicio
    this.cafeteriaService.crearPedido(this.nuevoPedido).subscribe({
      next: (res) => {
        alert('✅ Pedido registrado con éxito');
        this.resetFormulario();
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert('❌ Ocurrió un error al registrar el pedido. Verifica tu conexión.');
      }
    });
  }

  // Limpiar formulario tras el éxito
  private resetFormulario() {
    this.nuevoPedido = {
      estudiante: '',
      productoId: '',
      cantidad: 1,
      observacion: ''
    };
  }
}