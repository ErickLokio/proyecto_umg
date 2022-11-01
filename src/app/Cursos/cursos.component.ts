import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from './Interface/cursos.interface';
import { CursosServicesService } from './service/cursos-services.service';
import { FormsModule } from '@angular/forms';



@Component({
    selector: 'app-cursos-grid',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.css']
})
export class CursosComponents implements OnInit{
    constructor(private router: Router, private cursosServices: CursosServicesService,
        private active : ActivatedRoute){ }

    ngOnInit(): void {
        
    }

    navegar(){
        this.router.navigate([
            '/cursosGrid'
        ]);
    }

    cursos:Cursos = {
        id : '',
        descripcion : '',
    }

    guardarCurso(){
         this.cursosServices.crearCursos(this.cursos).subscribe(data => {
            this.router.navigate([ '/cursosGrid']);
        })
    }

}