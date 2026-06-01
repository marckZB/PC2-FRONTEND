import { Component, OnInit, inject } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { Incidencia } from '../../models/incidencias.interface'; // Esta es tu interfaz
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './incidencias.html',
  styleUrl: './incidencias.css'
})
export class IncidenciasComponent implements OnInit {
  private incService = inject(IncidenciasService);

  incidencias: Incidencia[] = [];

  // Al usar : Incidencia, TypeScript te garantiza que no falte ningún campo
  nuevaIncidencia: Incidencia = {
    titulo: '',       // <-- Agregado
    categoria: '',    // <-- Agregado
    aula: '',
    equipo: '',
    tipo: '',
    descripcion: '',
    estado: 'Pendiente'
  };

  ngOnInit() {
    this.listarIncidencias();
  }

  listarIncidencias() {
    this.incService.obtenerIncidencias().subscribe({
      next: (res) => this.incidencias = res,
      error: (err) => console.error('Error al listar:', err)
    });
  }

  registrar() {
    // Ya no necesitas 'as Incidencia' porque nuevaIncidencia YA ES de tipo Incidencia
    this.incService.crearIncidencia(this.nuevaIncidencia).subscribe({
      next: () => {
        alert('✅ Incidencia reportada');
        this.listarIncidencias();
        this.resetFormulario();
      },
      error: (err) => console.error('Error al registrar:', err)
    });
  }

  private resetFormulario() {
    this.nuevaIncidencia = {
      titulo: '',     // <-- Agregado
      categoria: '',  // <-- Agregado
      aula: '',
      equipo: '',
      tipo: '',
      descripcion: '',
      estado: 'Pendiente'
    };
  }

  actualizarEstado(incidencia: Incidencia) {
    if (incidencia.estado === 'Pendiente') {
      incidencia.estado = 'En proceso';
    } else if (incidencia.estado === 'En proceso') {
      incidencia.estado = 'Atendido';
    }
  }

  
}