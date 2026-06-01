export interface Curso {
  id?: number;
  nombre: string;
  creditos: number;
  categoria: string; // <--- AGREGA ESTA LÍNEA
}

export interface Matricula {
  estudiante: string;
  cursoId: number | null;
  fecha: string;
}