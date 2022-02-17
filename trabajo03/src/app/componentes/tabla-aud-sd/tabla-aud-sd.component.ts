import {Component, Input, OnInit} from '@angular/core';
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";
import {PosbleAnomaliaInterface} from "../../servicios/http/interfaces/posbleAnomalia.interface";
import {AnomaliaDatosInterface} from "../../servicios/http/interfaces/anomaliaDatos.interface";
import {ActivatedRoute} from "@angular/router";
import exportFromJSON from "export-from-json";

@Component({
  selector: 'app-tabla-aud-sd',
  templateUrl: './tabla-aud-sd.component.html',
  styleUrls: ['./tabla-aud-sd.component.scss']
})
export class TablaAudSDComponent implements OnInit {

  nombreBase = ''
  datos : AnomaliaDatosInterface []= []
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
          this.buscarAnomaliasDatos();
        }
      }
    })
  }

  buscarAnomaliasDatos(){
    this.servicioSQL.buscarAnomaliasDeDatos(this.nombreBase)
      .subscribe(
        (data)=>{
          this.datos = data
        }
      )
  }
  crearLog(){
    const fileName = 'loganomalíassinDatos'
    const exportType =  exportFromJSON.types.csv
    exportFromJSON({ data: this.datos, fileName: fileName, exportType: exportType })
  }

}
