import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Consulta } from 'src/app/core/models/Consulta.model';
import { Employee } from 'src/app/core/models/Employee.model';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ConsultaService } from 'src/app/core/services/Consulta/consulta.service';
@Component({
  selector: 'app-add-historia',
  templateUrl: './add-historia.component.html',
  styleUrls: ['./add-historia.component.scss']
})
export class AddHistoriaComponent implements OnInit {
  id: number = 0;
  AVLSC_OD = new FormControl('auto');
  AVLSC_OI = new FormControl('auto');
  AVLPC_OD = new FormControl('auto');
  AVLPC_OI = new FormControl('auto');
  PH_OD = new FormControl('auto');
  PH_OI = new FormControl('auto');
  LENS_OD = new FormControl('auto');
  LENS_OI = new FormControl('auto');
  BIOM_OD = new FormControl('auto');
  BIOM_OI = new FormControl('auto');
  REF_OD = new FormControl('auto');
  REF_OI = new FormControl('auto');
  QUER_OD = new FormControl('auto');
  QUER_OI = new FormControl('auto');
  PIO_OD = new FormControl('auto');
  PIO_OI = new FormControl('auto');
  TESTC_OD = new FormControl('auto');
  TESTC_OI = new FormControl('auto');
  OFTA_OD = new FormControl('auto');
  OFTA_OI = new FormControl('auto');
  KAPPA_OD = new FormControl('auto');
  KAPPA_OI = new FormControl('auto');
  formConsulta = new FormGroup({
    nombres: new FormControl(''),
    identificacion: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    ocupacion: new FormControl(''),
    edad: new FormControl(''),
    motivo: new FormControl(''),
    antecedentes: new FormControl(''),
    disposicion: new FormControl(''),
    remision: new FormControl(''),
    codigo: new FormControl(''),
    diagnostico: new FormControl(''),
    control: new FormControl(''),
    tipoLente: new FormControl(''),
    distanciaPupilar: new FormControl(''),
    tratamiento: new FormControl(''),
    observaciones: new FormControl('')
  });
  constructor(

    private formBuilder: FormBuilder,
    private consultaService:ConsultaService,
    private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.id = params["id"];
      this.clientService.getClients(this.id)
      .subscribe(client => {
            this.formConsulta.patchValue({
              identificacion: client.identificacion,
              nombres: client.nombres,
              direccion: client.direccion,
              telefono: client.telefono,
              ocupacion: client.ocupacion,
              edad: client.edad
            })
          }
        )
      });
    } 
    
  
  private buildForm(){
    this.formConsulta = this.formBuilder.group ({
      nombres:[''],
      identificacion:[''],
      direccion:[''],
      telefono:[''],
      ocupacion:[''],
      edad:[''],
      motivo: [''],
      antecedentes: [''],
      disposicion: [''],
      remision: [''],
      codigo: [''],
      diagnostico: [''],
      control: [''],
      tipoLente: [''],
      distanciaPupilar: [''],
      tratamiento: [''],
      observaciones: ['']
    })
  }
  saveConsulta(event: Event){
    event.preventDefault();
    if (this.formConsulta.valid){
      this.formConsulta.patchValue({
        AVLSC_OD: this.AVLSC_OD.value, 
        AVLSC_OI: this.AVLSC_OI.value, 
        AVLPC_OD: this.AVLPC_OD.value, 
        AVLPC_OI: this.AVLPC_OI.value,
        PH_OD: this.PH_OD.value,  
        PH_OI: this.PH_OI.value,
        LENS_OD: this.LENS_OD.value,
        LENS_OI: this.LENS_OI.value,
        BIOM_OD: this.BIOM_OD.value,
        BIOM_OI: this.BIOM_OI.value, 
        REF_OD: this.REF_OD.value,
        REF_OI: this.REF_OI.value,
        QUER_OD: this.QUER_OD.value,
        QUER_OI: this.QUER_OI.value, 
        PIO_OD: this.PIO_OD.value,  
        PIO_OI: this.PIO_OI.value,
        TESTC_OD: this.TESTC_OD.value,
        TESTC_OI: this.TESTC_OI.value,
        OFTA_OD: this.OFTA_OD.value, 
        OFTA_OI: this.OFTA_OI.value,
        KAPPA_OD: this.KAPPA_OD.value,
        KAPPA_OI: this.KAPPA_OI.value,
        idCliente: this.id
      });
      const consulta: Consulta = this.formConsulta.value;
      console.log(consulta)
      this.consultaService.createConsultas(consulta)
      .subscribe((newConsulta) => {
        console.log(newConsulta);
        this.router.navigate(['../Consultas'])
      })
    }
  }
}
