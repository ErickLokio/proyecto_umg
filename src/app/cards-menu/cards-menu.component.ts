import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.css']
})
export class CardsMenuComponent implements OnInit {
  
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegar(ruta:String){
    let ruteo = '/'+ruta;
    this.router.navigate([
      ruteo
    ]);
  }

}
