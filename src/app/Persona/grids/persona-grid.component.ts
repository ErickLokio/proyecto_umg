import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../interface/persona.interface';
import { PersonasServicesService } from '../services/personas-services.service';

@Component({
  selector: 'app-persona-grid',
  templateUrl: './persona-grid.component.html',
  styleUrls: ['./persona-grid.component.css']
})
export class PersonaGridComponent implements OnInit {

  personas : Persona[] = [];
  constructor(private router: Router, private personaService : PersonasServicesService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data => this.personas = data)
  }

  navegar(){
    this.router.navigate([
      '/persona'
    ]);
  }

  borrarPersona(id : string){
    this.personaService.eliminarPersona(id).subscribe(resp => {
        this.router.navigate([
            '/cardMenu'
        ]);
    })
}

}