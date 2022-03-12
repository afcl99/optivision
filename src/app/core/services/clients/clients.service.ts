import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Client } from '../../models/client.model';
import { environment } from "../../../../environments/environment";
import { filter, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllClients(){
    return this.http.get<Client[]>(`${environment.url_api}/listar`);
  }
  getClients(id: number){
    return this.http.get<Client>(`${environment.url_apiClient}/${id}`);
  }
  getClientByIdentificacion( identificacion: number){
    return this.http.get<number>(`${environment.url_apiClient}/identificacion/${identificacion}`);
  }
  createClients(Clients: Client){
    return this.http.post(`${environment.url_apiClient}/guardar`, Clients);
  }
  updateClients(id: number, changes: Partial<Client>){
    return this.http.put(`${environment.url_api}/actualizar/${id}`, changes)
  }
  deleteClients(id: number){
    return this.http.delete(`${environment.url_api}/eliminar/${id}`)
  }
}
