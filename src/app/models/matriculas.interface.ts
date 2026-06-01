export interface Curso {
  id?: number;
  nombre: string;
  creditos: number;
}

export interface Matricula {
  estudiante: string;
  cursoId: number | null;
  fecha: string;
}