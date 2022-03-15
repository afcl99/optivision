import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Consulta } from '../../models/Consulta.model';
import { environment } from "../../../../environments/environment";
import { filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(
    private http: HttpClient
  ) { }

  getAllConsultas(){
    return this.http.get<Consulta[]>(`${environment.url_api}/listar`);
  }
  getConsultas(id: number){
    return this.http.get<Consulta>(`${environment.url_api}/consulta/${id}`);
  }
  getConsultaByIdentificacion( identificacion: number){
    return this.http.get<Consulta>(`${environment.url_api}/consulta/identificacion/${identificacion}`);
  }
  createConsultas(Consultas: Consulta){
    return this.http.post(`${environment.url_api}/consulta/guardar`, Consultas);
  }
  updateConsultas(id: number, changes: Partial<Consulta>){
    return this.http.put(`${environment.url_api}/actualizar/${id}`, changes)
  }
  deleteConsultas(id: number){
    return this.http.delete(`${environment.url_api}/eliminar/${id}`)
  }
}
