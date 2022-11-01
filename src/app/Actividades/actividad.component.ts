import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Actividades } from './interface/actividades.interface';
import { ActividadesServiceService } from './services/actividades-service.service';

@Component({
    selector: 'app-actividades',
    templateUrl: './actividad.component.html',
    styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit{
    constructor(private router: Router, private actividadesService: ActividadesServiceService,
        private active : ActivatedRoute){ }

    ngOnInit(): void {
        
    }

    navegar(){
        this.router.navigate([
            '/actividadesGrid'
        ]);
    }

    actividad : Actividades = {
        id : '',
        descripcion : ''
    }

    guardarActividad(){
        this.actividadesService.crearActividad(this.actividad).subscribe( data => {
            this.router.navigate([
                '/actividadesGrid'
            ]); 
        })
    }

}