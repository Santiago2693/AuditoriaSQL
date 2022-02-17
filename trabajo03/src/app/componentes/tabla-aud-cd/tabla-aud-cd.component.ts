import {Component, Input, OnInit} from '@angular/core';
import {AnomaliaDatosInterface} from "../../servicios/http/interfaces/anomaliaDatos.interface";
import {PosbleAnomaliaInterface} from "../../servicios/http/interfaces/posbleAnomalia.interface";
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";

@Component({
  selector: 'app-tabla-aud-cd',
  templateUrl: './tabla-aud-cd.component.html',
  styleUrls: ['./tabla-aud-cd.component.scss']
})
export class TablaAudCDComponent implements OnInit {

  @Input() nombreBase = ''
  datos : PosbleAnomaliaInterface []= []
  constructor(
    private readonly servicioSQL : SqlConexionService
  ) { }

  ngOnInit(): void {
    this.servicioSQL.buscarPosiblesAnomalias(this.nombreBase)
      .subscribe(
        (data)=> {
          this.datos = data
        }
      )
  }
  }


