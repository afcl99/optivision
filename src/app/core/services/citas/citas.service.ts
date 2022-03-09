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
    return this.http.get<Cita[]>(`${environment.url_api}/listar`);
  }
  getCita(id: number){
    return this.http.get<Cita>(`${environment.url_api}/${id}`);
  }
  createCita(product: Cita){
    return this.http.post(`${environment.url_api}/citas`, product);
  }
  updateCita(id: number, changes: Partial<Cita>){
    return this.http.put(`${environment.url_api}/citas/${id}`, changes)
  }
  deleteCita(id: number){
    return this.http.delete(`${environment.url_api}/citas/${id}`)
  }
}
