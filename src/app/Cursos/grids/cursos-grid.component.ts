import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from '../Interface/cursos.interface';
import { CursosServicesService } from '../service/cursos-services.service';

@Component({
    selector: 'app-cursos-grid',
    templateUrl: './cursos-grid.component.html',
    styleUrls: ['./cursos-grid.component.css']
})
export class CursosGridComponents implements OnInit{

    cursos : Cursos[] = [];
    constructor(private cursosServices: CursosServicesService, private router: Router ){ }


    curso:Cursos = {
        id : '',
        descripcion : '',
    }

    ngOnInit(): void {
        this.cursosServices.getCursos().subscribe(data => this.cursos = data)        
    }

    navegar(){
        this.router.navigate([
            '/cursos'
        ]);
    }

    borrarCurso(id : string){
        this.cursosServices.eliminarCurso(id).subscribe(resp => {
            this.router.navigate([
                '/redirectCursos'
            ]);
        })
    }
}