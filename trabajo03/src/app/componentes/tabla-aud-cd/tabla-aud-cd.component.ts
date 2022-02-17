import {Component, Input, OnInit} from '@angular/core';
import {AnomaliaDatosInterface} from "../../servicios/http/interfaces/anomaliaDatos.interface";
import {PosbleAnomaliaInterface} from "../../servicios/http/interfaces/posbleAnomalia.interface";
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";
import {ActivatedRoute} from "@angular/router";
import exportFromJSON from "export-from-json";

@Component({
  selector: 'app-tabla-aud-cd',
  templateUrl: './tabla-aud-cd.component.html',
  styleUrls: ['./tabla-aud-cd.component.scss']
})
export class TablaAudCDComponent implements OnInit {

  nombreBase = ''
  datos : PosbleAnomaliaInterface []= []
  constructor(
    private readonly servicioSQL : SqlConexionService,
    private readonly  rutaActual: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const parametros$ = this.rutaActual.queryParams;

    parametros$.subscribe({
      next: (params) =>{
        this.nombreBase = params['db'];
        if(this.nombreBase){
          this.buscarAnomalias()
        }
      }
    })
  }

  buscarAnomalias(){
    this.servicioSQL.buscarPosiblesAnomalias(this.nombreBase)
      .subscribe(
        (data)=> {
          this.datos = data
        }
      )
  }
  crearLog(){
    const fileName = 'logAnomalíasConDatos'
    const exportType =  exportFromJSON.types.csv
    exportFromJSON({ data: this.datos, fileName: fileName, exportType: exportType })
  }
  }


