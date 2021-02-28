import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../servicios/heroes.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  hero:any= {}
  constructor(
    private activateRoute:ActivatedRoute,
    private _herosService:HeroesService
  ) {
    this.activateRoute.params.subscribe(parametro=>{
        this.hero = this._herosService.getHero(parametro['id'])
        console.log(this.hero);
    })
   }

  ngOnInit(): void {
  }

 

}
