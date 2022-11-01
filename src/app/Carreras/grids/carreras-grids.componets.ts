import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-carreras-grid',
    templateUrl: './carreras-grids.components.html',
    styleUrls: ['./carreras-grids.components.css']
})
export class CarrerasGridsComponents implements OnInit{

    constructor(private router: Router){ }

    ngOnInit(): void {
        
    }

    navegar(){
        this.router.navigate([
            '/carrerasIngreso'
        ]);
    }

    ListarCarrera(){
        this.router.navigate(["/listarCarrera"]);
    }

    NuevoCarrera(){
        this.router.navigate(["/addCarrera"]);
    }
}