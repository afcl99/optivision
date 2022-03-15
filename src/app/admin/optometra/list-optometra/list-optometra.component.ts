import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/core/models/Employee.model';
import { EmployeeService } from 'src/app/core/services/Employee/Employee.service';

@Component({
  selector: 'app-list-optometra',
  templateUrl: './list-optometra.component.html',
  styleUrls: ['./list-optometra.component.scss']
})
export class ListOptometraComponent implements OnInit {
  optometras: Employee[]=[];
  displayedColumns: string[] =['Identificacion','Nombre completo', 'Telefono', 'Direccion','Email','Estado', 'actions']

  constructor(
    private route: Router,
    private EmployeeService: EmployeeService,
  ) { }
  
  ngOnInit(): void {
    this.fetchOptometras()
  }
  fetchOptometras(){
    this.EmployeeService.getAllEmployee()
    .subscribe((listOptometras) => {
      this.optometras = listOptometras;            
      });
  }
  deleteOptometra(id: number){
    this.EmployeeService.deleteEmployee(id).subscribe();
    window.location.reload();
  }

}
