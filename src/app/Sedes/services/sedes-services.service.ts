import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sedes } from '../interface/sedes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SedesServicesService {

  constructor(private http : HttpClient) { }

  getSedes(){
    return this.http.get<Sedes[]>('http://localhost:3000/sedes')
  }

  crearSedes(seccion:Sedes) : Observable<Sedes>{
    return this.http.post<Sedes>('http://localhost:3000/sedes', seccion)
  }

  eliminarSedes(id:string) : Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/sedes/${id}`)
  }


}
