import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/Employee/Employee.service';

@Component({
  selector: 'app-add-optometra',
  templateUrl: './add-optometra.component.html',
  styleUrls: ['./add-optometra.component.scss']
})
export class AddOptometraComponent implements OnInit {
  tipoId = new FormControl('auto');
  formOptometra = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    identificacion: new FormControl(''),
    rol: new FormControl(''),
    estado: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    tipoIdentificacion: new FormControl('')
  });
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private EmployeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
  }
  pruebas(event: Event){}
  saveOptometra(event: Event) {
    event.preventDefault(); //para evitar que recargue la pagina
    if (this.formOptometra.valid) {
      this.formOptometra.patchValue({
        rol: "OPTOMETRA",
        estado: "true",
        tipoIdentificacion: this.tipoId.value
        
      });
      const employee = this.formOptometra.value;
      /* this.EmployeeService.getEmployeeByIdentificacion(this.formOptometra.get('identificacion').value).subscribe((res) => 
      {
        if(res.id != -1){
          this.EmployeeService.createEmployee(employee).subscribe();
          this.route.navigate(['../optometras'])
        }else{
          console.log("el empleado ya existe");
        }
      }
      ) */

      this.EmployeeService.createEmployee(employee).subscribe();
      this.route.navigate(['../optometras'])
    } 
      
  }

  private  buildForm(){
    this.formOptometra = this.formBuilder.group ({
      nombres: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]]
    })
  }

}
