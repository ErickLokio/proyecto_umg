import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../Interface/cursos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosServicesService {


  constructor(private http : HttpClient) { }

  getCursos(){
    return this.http.get<Cursos[]>('http://localhost:3000/cursos')
  }

  crearCursos(curso:Cursos):Observable<Cursos>{
    return this.http.post<Cursos>('http://localhost:3000/cursos',curso)
  }

  eliminarCurso(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/cursos/${id}`)
  }
}
