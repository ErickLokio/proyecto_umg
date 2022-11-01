import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Secciones } from './interface/secciones.interface';
import { SeccionesServicesService } from './services/secciones-services.service';

@Component({
    selector: 'app-cursos-grid',
    templateUrl: './secciones.component.html',
    styleUrls: ['./secciones.component.css']
})
export class SeccionesComponents implements OnInit{
    constructor(private router: Router, private seccionesServices: SeccionesServicesService,
        private active : ActivatedRoute){ }

    ngOnInit(): void {
        
    }

    navegar(){
        this.router.navigate([
            '/seccionesGrid'
        ]);
    }

    seccion:Secciones = {
        id : '',
        descripcion : ''       
    }

    guardarSeccion(){
        this.seccionesServices.crearSeccion(this.seccion).subscribe(data => {
            this.router.navigate(['/seccionesGrid']); 
        })
    }
}