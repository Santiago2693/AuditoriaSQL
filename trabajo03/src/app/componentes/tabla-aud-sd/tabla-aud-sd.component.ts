import {Component, Input, OnInit} from '@angular/core';
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";
import {PosbleAnomaliaInterface} from "../../servicios/http/interfaces/posbleAnomalia.interface";
import {AnomaliaDatosInterface} from "../../servicios/http/interfaces/anomaliaDatos.interface";

@Component({
  selector: 'app-tabla-aud-sd',
  templateUrl: './tabla-aud-sd.component.html',
  styleUrls: ['./tabla-aud-sd.component.scss']
})
export class TablaAudSDComponent implements OnInit {

  @Input() nombreBase = ''
  datos : AnomaliaDatosInterface []= []
  constructor(
    private readonly servicioSQL : SqlConexionService
  ) { }

  ngOnInit(): void {
    this.servicioSQL.buscarAnomaliasDeDatos(this.nombreBase)
      .subscribe(
        (data)=>{
          this.datos = data
        }
      )
  }

}
