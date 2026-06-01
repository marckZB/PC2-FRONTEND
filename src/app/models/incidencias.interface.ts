export interface Incidencia {
  id?: number;
  titulo: string;      // Agregado
  categoria: string;   // Agregado
  aula: string;
  equipo: string;
  tipo: string;
  descripcion: string;
  estado: 'Pendiente' | 'En proceso' | 'Atendido';
}
