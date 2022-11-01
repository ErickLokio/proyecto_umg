import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carreras } from '../interface/carreras.interface';
import { CarrerasServiceService } from '../service/carreras-service.service';

@Component({
  selector: 'app-listar-carrera',
  templateUrl: './listar-carrera.component.html',
  styleUrls: ['./listar-carrera.component.css']
})
export class ListarCarreraComponent implements OnInit {

  carreras: Carreras[] = [];
  constructor(private carreasService: CarrerasServiceService, private router: Router) { }

  ngOnInit(): void {
    this.carreasService.getCarreras().subscribe(data => this.carreras = data)
  }

  
  navegar(){
    this.router.navigate([
        '/carrerasIngreso'
    ]);
}

borrarCarrera(id : string){
  this.carreasService.eliminarCurso(id).subscribe(resp => {
      this.router.navigate([
          '/cardMenu'
      ]);
  })
}

}
