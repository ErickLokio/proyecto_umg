import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secciones } from '../interface/secciones.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeccionesServicesService {
  
  constructor(private http : HttpClient) { }

  getSecciones(){
    return this.http.get<Secciones[]>('http://localhost:3000/secciones')
  }

  crearSeccion(seccion:Secciones) : Observable<Secciones>{
    return this.http.post<Secciones>('http://localhost:3000/secciones', seccion)
  }

  eliminarSecciones(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/secciones/${id}`)
  }
}
