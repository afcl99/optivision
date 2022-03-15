import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from '../../models/Employee.model';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  getAllEmployee(){
    return this.http.get<Employee[]>(`${environment.url_api}/empleado/listar`);
  }
  getEmployee(id: number){
    return this.http.get<Employee>(`${environment.url_api}/empleado/${id}`);
  }
  getEmployeeByIdentificacion( identificacion: number){
    return this.http.get<Employee>(`${environment.url_api}/empleado/identificacion/${identificacion}`);
  }
  createEmployee(Employee: Employee){
    console.log(Employee);
    return this.http.post(`${environment.url_api}/empleado/guardar`, Employee);
  }
  updateEmployee(id: number, changes: Partial<Employee>){
    return this.http.put(`${environment.url_api}/empleado/actualizar/${id}`, changes)
  }
  deleteEmployee(id: number){
    return this.http.delete(`${environment.url_api}/empleado/eliminar/${id}`)
  }
}
