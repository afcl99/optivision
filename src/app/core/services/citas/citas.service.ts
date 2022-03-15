import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Cita } from "./../../models/Citas.model";
import { environment } from "./../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCitas(){
    return this.http.get<Cita[]>(`${environment.url_api}/cita/listar`);
  }
  getCita(id: number){
    return this.http.get<Cita>(`${environment.url_api}/cita/${id}`);
  }
  createCita(Cita: Cita){
    return this.http.post(`${environment.url_api}/cita/guardar/`, Cita);
  }
  updateCita(id: number, changes: Partial<Cita>){
    return this.http.put(`${environment.url_api}/cita/actualizar/${id}`, changes)
  }
  deleteCita(id: number){
    return this.http.delete(`${environment.url_api}/cita/eliminar/${id}`)
  }
}
