import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Cita } from 'src/app/core/models/Citas.model';
import { Employee } from 'src/app/core/models/Employee.model';
import { EmployeeService } from 'src/app/core/services/Employee/Employee.service';

@Component({
  selector: 'app-edit-optometra',
  templateUrl: './edit-optometra.component.html',
  styleUrls: ['./edit-optometra.component.scss']
})
export class EditOptometraComponent implements OnInit {
  id: number = 0;
  estado = new FormControl('auto');
  formOptometra = new FormGroup({
    tipoId: new FormControl(''),
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    identificacion: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(

    private formBuilder: FormBuilder,
    private employeeService:EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      this.employeeService.getEmployee(this.id)
      .subscribe(employee => {
            this.formOptometra.patchValue({
              identificacion: employee.identificacion,
              nombres: employee.nombres,
              apellidos: employee.apellidos,
              telefono: employee.telefono,
              direccion: employee.direccion,
              email: employee.email,
              tipoId: employee.tipoIdentificacion
            })
          }
        )
      });
    } 
    
  
  private buildForm(){
    this.formOptometra = this.formBuilder.group ({
      identificacion: [''],
      nombres: [''],
      apellidos: [''],
      telefono: [''],
      fecha: [''],
      hora: [''],
      idCliente: [''],
      estado: [''],
      direccion: [''],
      email: [''],
      tipoId: [''],
      password: [''],
      floatLabel: this.estado,
    })
  }
  saveOptometra(event: Event){
    event.preventDefault();
    if (this.formOptometra.valid){
      this.formOptometra.patchValue({
        estado: this.estado.value,
      });
      const employee: Employee = this.formOptometra.value;
      console.log(employee)
      this.employeeService.updateEmployee(this.id, employee)
      .subscribe((newEmployee) => {
        console.log(newEmployee);
        this.router.navigate(['../optometras'])
      })
    }
  }
}
