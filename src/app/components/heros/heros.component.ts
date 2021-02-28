import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from "../../servicios/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes:Heroes[]= []
  
  constructor(private _heroService:HeroesService,
              private router:Router            
    ) { 

  }

  ngOnInit() {
  

   this.heroes = this._heroService.getHeros()
   console.log(this.heroes);
  }
  verHero(idx:number){
    this.router.navigate(['/hero', idx])
  }

}
