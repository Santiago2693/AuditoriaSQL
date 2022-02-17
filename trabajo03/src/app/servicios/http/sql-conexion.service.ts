import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SqlConexionService {

  constructor(
    private readonly httpCliente:HttpClient
  ) {
 



  }
}
