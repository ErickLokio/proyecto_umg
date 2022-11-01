import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../interface/persona.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasServicesService {

  constructor(private http : HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>('http://localhost:3000/usuarios')
  }

  crearPersona(personas : Persona) : Observable<Persona>{
    return this.http.post<Persona>('http://localhost:3000/usuarios', personas)
  }

  eliminarPersona(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/usuarios/${id}`)
  }


}
