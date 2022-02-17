import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseNameInterface} from "./interfaces/baseName.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {PosbleAnomaliaInterface} from "./interfaces/posbleAnomalia.interface";
import {AnomaliaDatosInterface} from "./interfaces/anomaliaDatos.interface";

@Injectable({
  providedIn: 'root'
})
export class SqlConexionService {

  constructor(
    private readonly httpCliente:HttpClient
  ) {}
  buscarBases(): Observable<BaseNameInterface[]>{
    const url = environment.urlSqlConexion+'/integridad/dbs';

    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as BaseNameInterface[]
        )
      );
  }




  buscarPosiblesAnomalias(base:string): Observable<PosbleAnomaliaInterface[]>{
    const url = environment.urlSqlConexion+'/integridadSD/'+base;

    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as PosbleAnomaliaInterface[]
        )
      );
  }

  buscarAnomaliasDeDatos(base:string): Observable<AnomaliaDatosInterface[]>{
    const url = environment.urlSqlConexion+'/integridadCD/'+base;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as AnomaliaDatosInterface[]
        )
      );
  }
}
