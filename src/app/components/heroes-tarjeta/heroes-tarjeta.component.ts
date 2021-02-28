import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent  {

  @Input() hero:any = {}
  @Input() indice:number = 0;
  constructor(private router:Router) { }
/**/
   verHero(){
     console.log(this.indice);
     this.router.navigate(['/hero', this.indice])
   }

}
