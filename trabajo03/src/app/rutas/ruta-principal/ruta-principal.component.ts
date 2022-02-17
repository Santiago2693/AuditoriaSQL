import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SqlConexionService} from "../../servicios/http/sql-conexion.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-principal',
  templateUrl: './ruta-principal.component.html',
  styleUrls: ['./ruta-principal.component.scss']
})
export class RutaPrincipalComponent implements OnInit {

  formGroup?:FormGroup
  listaBases?:string[] = [];
  constructor(
    private readonly formBuilder:FormBuilder,
    private readonly apiService:SqlConexionService,
    private readonly rutaActual:ActivatedRoute,
    private readonly enrutador:Router
  ) { }

  ngOnInit(): void {
    this.cargarBases()
  }

  cargarBases(){
    this.apiService.buscarBases()
      .subscribe({
        next: (datos) => {
          this.listaBases = datos.map((element)=>{
            return element.name;
          })
          this.prepararFormulario()
        }
      })
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder.group({
      listaDb: new FormControl('')
    })
  }

  baseSeleccionada(){
    const base = this.formGroup?.get('listaDb')
    if(base){
      this.enrutador.navigate(['/home'],{
        queryParams: {db: base.value}
      })
    }
  }

}
