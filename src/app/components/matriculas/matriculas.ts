import { Component, OnInit, inject } from '@angular/core';
import { MatriculasService } from '../../services/matriculas.service';
import { Curso } from '../../models/matriculas.interface';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css'
})
export class MatriculasComponent implements OnInit {
  private matService = inject(MatriculasService);
  
  cursos: Curso[] = [];
  
  // Hemos añadido 'categoria' aquí para que el [(ngModel)] funcione
  nuevaMatricula = {
    estudiante: '',
    cursoId: null as number | null,
    categoria: '', 
    fecha: new Date().toISOString().split('T')[0]
  };

  ngOnInit() {
    this.matService.obtenerCursos().subscribe({
      next: (res) => this.cursos = res,
      error: (err) => console.error('Error al cargar cursos:', err)
    });
  }

  matricular() {
    // Validamos que todos los campos, incluida la categoría, estén llenos
    if (!this.nuevaMatricula.estudiante || !this.nuevaMatricula.cursoId || !this.nuevaMatricula.categoria) {
      alert('⚠️ Por favor completa el nombre del estudiante, la categoría y selecciona un curso.');
      return;
    }

    this.matService.solicitarMatricula(this.nuevaMatricula).subscribe({
      next: () => {
        alert('🎓 ¡Matrícula registrada exitosamente!');
        this.resetFormulario();
      },
      error: (err) => console.error('Error al matricular:', err)
    });
  }

  private resetFormulario() {
    this.nuevaMatricula = {
      estudiante: '',
      cursoId: null,
      categoria: '',
      fecha: new Date().toISOString().split('T')[0]
    };
  }
}