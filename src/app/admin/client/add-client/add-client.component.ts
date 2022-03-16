import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  tipoId = new FormControl('auto');
  formClient = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    identificacion: new FormControl(''),
    rol: new FormControl(''),
    estado: new FormControl(''),
    email: new FormControl(''),
    tipoIdentificacion: new FormControl('')
  });
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private clientService: ClientsService,
  ) { }

  ngOnInit(): void {
  }
  pruebas(event: Event){}
  saveClient(event: Event) {
    event.preventDefault(); //para evitar que recargue la pagina
    if (this.formClient.valid) {
      this.formClient.patchValue({

        tipoIdentificacion: this.tipoId.value

      });
      const employee = this.formClient.value;
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

      this.clientService.createClients(employee).subscribe();
      this.route.navigate(['../admin/clientes'])
    }

  }

  private  buildForm(){
    this.formClient = this.formBuilder.group ({
      nombres: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      rol: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tipoIdentificacion: ['', [Validators.required]]
    })
  }

}
