import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Employee } from 'src/app/core/models/Employee.model';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  id: number = 0;
  estado = new FormControl('auto');
  formCliente = new FormGroup({
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
    private clientService:ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      this.clientService.getClients(this.id)
      .subscribe(employee => {
            this.formCliente.patchValue({
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
    this.formCliente = this.formBuilder.group ({
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
      floatLabel: this.estado,
    })
  }
  saveCliente(event: Event){
    event.preventDefault();
    if (this.formCliente.valid){
      this.formCliente.patchValue({
        estado: this.estado.value,
      });
      const employee: Employee = this.formCliente.value;
      console.log(employee)
      this.clientService.updateClients(this.id, employee)
      .subscribe((newEmployee) => {
        console.log(newEmployee);
        this.router.navigate(['../optometras'])
      })
    }
  }
}
