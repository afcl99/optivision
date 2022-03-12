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
    return this.http.get<Cita[]>(`${environment.url_apiCita}/listar`);
  }
  getCita(id: number){
    return this.http.get<Cita>(`${environment.url_api}/${id}`);
  }
  createCita(Cita: Cita, id: number){
    return this.http.post(`${environment.url_apiCita}/guardar/${id}`, Cita);
  }
  updateCita(id: number, changes: Partial<Cita>){
    return this.http.put(`${environment.url_api}/citas/${id}`, changes)
  }
  deleteCita(id: number){
    return this.http.delete(`${environment.url_api}/citas/${id}`)
  }
}
