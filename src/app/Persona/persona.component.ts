import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Persona } from './interface/persona.interface';
import { PersonasServicesService } from './services/personas-services.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private router: Router, private personaService : PersonasServicesService,
    private active : ActivatedRoute) { }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate([
      '/persona'
    ]);
  }

  persona : Persona = {
    id : '',
    nombres : '',
    apellidos : '',
    correo : '',
    edad : '',
    fecha_nacimiento : '',
    password : '',
    perfil : '',
    sexo : '',
    username : ''
  }
  
  guardarPersona(){
    this.personaService.crearPersona(this.persona).subscribe( data => {
      this.router.navigate([
        '/persona-grid'
      ]);
    })
  }

}
