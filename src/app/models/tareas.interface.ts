export interface Tarea {
  id?: number;
  titulo: string;
  descripcion: string;
  estado: 'Pendiente' | 'En Progreso' | 'Completada';
  prioridad: 'Baja' | 'Media' | 'Alta';
  fechaVencimiento: string;
  curso: string;
}