import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividades } from '../interface/actividades.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesServiceService {

  constructor(private http : HttpClient) { }

  getActividades(){
    return this.http.get<Actividades[]>('http://localhost:3000/actividades')
  }

  crearActividad(actividad:Actividades) : Observable<Actividades>{
    return this.http.post<Actividades>('http://localhost:3000/actividades', actividad)
  }

  eliminarActividad(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/actividades/${id}`)
  }

}
