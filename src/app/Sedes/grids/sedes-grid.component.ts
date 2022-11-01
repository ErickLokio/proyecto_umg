import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sedes } from '../interface/sedes.interface';
import { SedesServicesService } from '../services/sedes-services.service';

@Component({
    selector: 'app-sedes-grid',
    templateUrl: './sedes-grid.component.html'
})
export class SedesGridComponents implements OnInit{

    sedes : Sedes[] = [];

    constructor(private sedesServices: SedesServicesService, private router: Router){ }

    ngOnInit(): void {
        this.sedesServices.getSedes().subscribe(data => this.sedes = data)               
    }

    navegar(){
        this.router.navigate([
            '/sedes'
        ]);
    }

    sedesSeccion(id : string){
        this.sedesServices.eliminarSedes(id).subscribe(resp => {
            this.router.navigate([
                '/cardMenu'
            ]);
        })
    }


}