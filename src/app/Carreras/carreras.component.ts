import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carreras } from './interface/carreras.interface';
import { CarrerasServiceService } from './service/carreras-service.service';

@Component({
    selector: 'app-carreras',
    templateUrl: './carreras.component.html',
})
export class CarrerasComponent implements OnInit{
    constructor(private router: Router, private carrerasServices: CarrerasServiceService,
        private active : ActivatedRoute){ }

        ngOnInit(): void {
        
        }

        carrera:Carreras = {
            id : '',
            descripcion : ''
        }

        guardarCarreras(){
            this.carrerasServices.crearCarreras(this.carrera).subscribe( data => {
                this.router.navigate([ '/listarCarrera']);
            })
        }

}