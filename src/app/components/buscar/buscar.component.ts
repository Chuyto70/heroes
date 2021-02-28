import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes:any = {}
  constructor(private _rutaActiva:ActivatedRoute,
              private _heroService:HeroesService,
              private router:Router ) {
      this._rutaActiva.params.subscribe(parametro=>{
      
      this.heroes =  this._heroService.buscadorHero(parametro['nombre'])
        
      })

   }

  ngOnInit(): void {
  }
  verHero(idx:number){
    this.router.navigate(['/hero', idx])
  }

}
