import { Component, OnInit } from '@angular/core';
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tabla-aud-re',
  templateUrl: './tabla-aud-re.component.html',
  styleUrls: ['./tabla-aud-re.component.scss']
})
export class TablaAudREComponent implements OnInit {

  nombreBase =''
  datos : [] =[]
  constructor(
    private readonly servicioSQL : SqlConexionService,
    private readonly  rutaActual: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametros$ = this.rutaActual.queryParams;
    parametros$.subscribe({
      next: (params) =>{
        this.nombreBase = params['db'];
        // this.buscarRelacionesentidades()
      }
    })
  }
  // buscarRelacionesentidades(){
  //   this.servicioSQL.(this.nombreBase)
  //     .subscribe(
  //       (data)=>{
  //         this.datos = data
  //       }
  //     )
  // }

}
