import { Component } from '@angular/core';

interface Alumnos {
  nombre: string,
  fechaInscripcion: Date,
  dineroAbonado: number,
  añoInicia: number
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {

  titulo: string = "Lista de inscriptos";

  alumnos: Alumnos[] = [
    {
      nombre: "Juan",
      fechaInscripcion: new Date(),
      dineroAbonado: 50000,
      añoInicia: 2024
    },
    {
      nombre: "Laura",
      fechaInscripcion: new Date(),
      dineroAbonado: 60000,
      añoInicia: 2024
    },
    {
      nombre: "German",
      fechaInscripcion: new Date(),
      dineroAbonado: 80000,
      añoInicia: 2024
    }
  ]

}
