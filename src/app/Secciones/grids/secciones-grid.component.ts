import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Secciones } from '../interface/secciones.interface';
import { SeccionesServicesService } from '../services/secciones-services.service';

@Component({
    selector: 'app-cursos-grid',
    templateUrl: './secciones-grid.component.html',
    styleUrls: ['./secciones-grid.component.css']
})
export class SeccionesGridComponents implements OnInit{

    secciones : Secciones[] = [];
    constructor(private seccionesServices: SeccionesServicesService,private router: Router){ }

    ngOnInit(): void {
        this.seccionesServices.getSecciones().subscribe(data => this.secciones = data)               
    }

    navegar(){
        this.router.navigate([
            '/secciones'
        ]);
    }

    borrarSeccion(id : string){
        this.seccionesServices.eliminarSecciones(id).subscribe(resp => {
            this.router.navigate([
                '/cardMenu'
            ]);
        })
    }
}