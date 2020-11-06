import { Persona } from './Persona';

export interface Asignacion {
  tipo: string;
  estudiantes: Persona[];
  fecha: Date;
}
