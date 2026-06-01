import { Component, OnInit, inject } from '@angular/core';
import { TareasService } from '../../services/tareas.service';
import { Tarea } from '../../models/tareas.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tareas.html', // <-- CORREGIDO: Ruta corta sin ".component"
  styleUrl: './tareas.css'     // <-- CORREGIDO: Ruta corta sin ".component"
})
export class TareasComponent implements OnInit {
  private tareasService = inject(TareasService);

  tareas: Tarea[] = [];
  
  nuevaTarea: Tarea = {
    titulo: '',
    descripcion: '',
    estado: 'Pendiente',
    prioridad: 'Baja',
    fechaVencimiento: '',
    curso: ''
  };

  ngOnInit() {
    this.listarTareas();
  }

  listarTareas() {
    this.tareasService.obtenerTareas().subscribe({
      next: (res) => this.tareas = res,
      error: (err) => console.error('Error al listar:', err)
    });
  }

  crear() {
    if (!this.nuevaTarea.titulo || !this.nuevaTarea.curso || !this.nuevaTarea.fechaVencimiento) {
      alert('⚠️ Por favor completa los campos obligatorios: Título, Curso y Fecha.');
      return;
    }

    this.tareasService.crearTarea(this.nuevaTarea).subscribe({
      next: () => {
        alert('✅ Tarea creada con éxito');
        this.listarTareas(); 
        this.resetFormulario();
      },
      error: (err) => console.error('Error al crear:', err)
    });
  }

  eliminar(id: number | undefined) {
    if (!id) return;
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.tareasService.eliminarTarea(id).subscribe({
        next: () => {
          alert('🗑️ Tarea eliminada');
          this.listarTareas();
        },
        error: (err) => console.error('Error al eliminar:', err)
      });
    }
  }

  private resetFormulario() {
    this.nuevaTarea = {
      titulo: '',
      descripcion: '',
      estado: 'Pendiente',
      prioridad: 'Baja',
      fechaVencimiento: '',
      curso: ''
    };
  }
}