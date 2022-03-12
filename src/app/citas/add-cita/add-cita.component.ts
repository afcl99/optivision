import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from 'src/app/core/services/citas/citas.service';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {
  selected: Date | null | undefined;
  formCita = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    fecha: new FormControl(),
    hora: new FormControl(''),
    identificacion: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private CitasService: CitasService,
    private ClientsService: ClientsService

  ) {}

  ngOnInit(): void {
  }
  pruebas(event: Event){
    event.preventDefault();
    if(this.formCita.valid){
      console.log(formatDate(this.selected,'shortDate','en-US'));

    }
  }
  saveCita(event: Event) {
    event.preventDefault(); //para evitar que recargue la pagina
    if (this.formCita.valid) {
      this.formCita.patchValue({
        fecha: formatDate(this.selected,'shortDate','en-US'),
        hora: (<HTMLInputElement>document.getElementById("hora")).value
      });
      const client = this.formCita.value;
      this.ClientsService.getClientByIdentificacion(this.formCita.get('identificacion').value).subscribe((res) => {
        if(res != -1){
          console.log(res)
            const cita = this.formCita.value;
            this.CitasService.createCita(cita,res).subscribe((newCita) => {
            this.route.navigate(['../citas'])
          })  
        }else{
            this.ClientsService.createClients(client).subscribe((newClient) => {
            const cita = this.formCita.value;
            this.CitasService.createCita(cita,Object.values(newClient)[0]).subscribe((newCita) => {
            this.route.navigate(['../citas'])
          })
          }) 
        };
      });          
    }
  }
  private  buildForm(){
    this.formCita = this.formBuilder.group ({
      nombres: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
    })
  }

}
