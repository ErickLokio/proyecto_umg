import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Sedes } from './interface/sedes.interface';
import { SedesServicesService } from './services/sedes-services.service';

@Component({
    selector: 'app-sedes-ingreso',
    templateUrl: './sedes.component.html',
})
export class SedesComponents implements OnInit{
    constructor(private router : Router, private sedesServices : SedesServicesService,
        private active : ActivatedRoute){}

        ngOnInit(): void {
        
        }
    

        navegar(){
            this.router.navigate([
                '/sedesGrid'
            ]);
        }

        sedes : Sedes = {
            id : '',
            correo : '',
            direccion : '',
            encargado : '',
            latitud : '',
            longitud : '',
            nombre : ''
        }

        guardarSedes(){
            this.sedesServices.crearSedes(this.sedes).subscribe(data => {
                this.router.navigate(['/cardMenu']);
            })
        }
}