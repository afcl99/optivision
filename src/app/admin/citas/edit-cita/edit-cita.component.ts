import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CitasService } from 'src/app/core/services/citas/citas.service';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { formatDate } from '@angular/common';
import { Cita } from 'src/app/core/models/Citas.model';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.scss']
})
export class EditCitaComponent implements OnInit {
  seasons:any = ["estado","estado2"];
  favoriteSeason: any = "hola";
  id: number = 0;
  idC: number = -1;
  estado = new FormControl('auto');
  selected: Date | null | undefined;
  formCita = new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
    fecha: new FormControl(),
    hora: new FormControl(''),
    identificacion: new FormControl('')
  });
  constructor(
    private formBuilder: FormBuilder,
    private citasService:CitasService,
    private clienteService:ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      this.citasService.getCita(this.id)
      .subscribe(cita => {
        this.idC = cita.idCliente;
        this.clienteService.getClients(cita.idCliente).subscribe(
          cliente => {
            this.formCita.patchValue({
              identificacion: cliente.identificacion,
              nombres: cliente.nombres,
              apellidos: cliente.apellidos,
              telefono: cliente.telefono,
              direccion: cliente.direccion
            })
          }
        )
      })
    });
  }
  private  buildForm(){
    this.formCita = this.formBuilder.group ({
      identificacion: [''],
      nombres: [''],
      apellidos: [''],
      telefono: [''],
      fecha: [''],
      hora: [''],
      idCliente: [''],
      estado: [''],
      direccion: [''],
      floatLabel: this.estado,
    })
  }
  saveCita(event: Event){
    event.preventDefault();
    if (this.formCita.valid){
      this.formCita.patchValue({
        fecha: formatDate(this.selected,'shortDate','en-US'),
        hora: (<HTMLInputElement>document.getElementById("hora")).value,
        estado: this.estado.value,
        idCliente: this.idC,
      });
      const cita: Cita = this.formCita.value;
      console.log(cita)
      this.citasService.updateCita(this.id, cita)
      .subscribe((newCita) => {
        console.log(newCita);
        this.router.navigate(['../citas'])
      })
    }
  }
}
