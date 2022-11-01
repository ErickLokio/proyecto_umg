import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividades } from '../interface/actividades.interface';
import { ActividadesServiceService } from '../services/actividades-service.service';

@Component({
    selector: 'app-actividades-grid',
    templateUrl: './actividades-grid.component.html',
    styleUrls: ['./actividades-grid.component.css']
})
export class AvtividadesGridComponents implements OnInit{
    
    actividades : Actividades[] = [];
    constructor(private actividadesServices: ActividadesServiceService,private router: Router){ }

    ngOnInit(): void {
        this.actividadesServices.getActividades().subscribe(data => this.actividades = data)        
    }

    navegar(){
        this.router.navigate([
            '/actividad'
        ]);
    }

    borrarActividad(id : string){
        this.actividadesServices.eliminarActividad(id).subscribe(resp => {
            this.router.navigate([
                '/cardMenu'
            ]);
        })
      }
}