import { Component, OnInit, inject } from '@angular/core';
import { MatriculasService } from '../../services/matriculas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculas.html'
})
export class MatriculasComponent implements OnInit {
  private matService = inject(MatriculasService);
  
  matriculas: any[] = []; // Lista para mostrar abajo
  
  nuevaMatricula = {
    estudiante: '',
    curso: '',
    fecha: new Date().toISOString().split('T')[0]
  };

  ngOnInit() {
    this.cargarMatriculas();
  }

  cargarMatriculas() {
    this.matService.obtenerMatriculas().subscribe({
      next: (res) => this.matriculas = res,
      error: (err) => console.error('Error al cargar:', err)
    });
  }

  matricular() {
    if (!this.nuevaMatricula.estudiante || !this.nuevaMatricula.curso) {
      alert('⚠️ Por favor completa el estudiante y selecciona un curso.');
      return;
    }

    this.matService.solicitarMatricula(this.nuevaMatricula).subscribe({
      next: () => {
        alert('🎓 ¡Matrícula registrada exitosamente!');
        this.resetFormulario();
        this.cargarMatriculas(); // Recargar la lista
      },
      error: (err) => console.error('Error:', err)
    });
  }

  private resetFormulario() {
    this.nuevaMatricula = {
      estudiante: '',
      curso: '',
      fecha: new Date().toISOString().split('T')[0]
    };
  }
}