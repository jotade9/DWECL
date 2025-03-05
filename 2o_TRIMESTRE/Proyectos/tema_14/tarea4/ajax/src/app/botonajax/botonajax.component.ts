import { Component } from '@angular/core';
import { ServiajaxService } from '../serviajax.service';

@Component({
  selector: 'app-botonajax',
  standalone: false,
  templateUrl: './botonajax.component.html',
  styleUrl: './botonajax.component.css'
})
export class BotonajaxComponent {
  constructor(private serviAjax: ServiajaxService ) { }

  llamaAjaxC():void{
    this.serviAjax.llamaAjax('http://localhost:8080/dewcl/2o_TRIMESTRE/Proyectos/tema_14/tarea4/ajax/public/jsonGET.php?nombre=Juan&ciudad=Ubrique')
      .subscribe(data=> {
     var i=document.getElementById('datos') as HTMLDivElement;
      if(i!=null){
          i.innerHTML=`Desde servidor ${data['nombre']} de ${data['ciudad']}`
      };              
    });
  }


}
