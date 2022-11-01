import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carreras } from '../interface/carreras.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarrerasServiceService {

  constructor(private http : HttpClient) { }

  getCarreras(){
    return this.http.get<Carreras[]>('http://localhost:3000/carreras')
  }

  crearCarreras(carrera:Carreras):Observable<Carreras>{
    return this.http.post<Carreras>('http://localhost:3000/carreras', carrera)
  }

  eliminarCurso(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/carreras/${id}`)
  }

}
