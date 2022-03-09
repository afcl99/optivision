import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/Citas.model';
import { CitasService } from 'src/app/core/services/citas/citas.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.scss']
})
export class AddCitaComponent implements OnInit {

  form = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private CitasService: CitasService
  ) {}

  ngOnInit(): void {
  }
  saveCita(event: Event) {
    event.preventDefault(); //para evitar que recargue la pagina
    if (this.form.valid) {
      const cita = this.form.value;
      this.CitasService.createCita(cita)
      .subscribe((newCita) => {
        console.log(newCita);
        this.route.navigate(['../list-producto/list-producto.component.ts'])
      })
    }
  }
  private  buildForm(){
    this.form = this.formBuilder.group ({
      id: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      IdCliente: ['', [Validators.required]],
      IdEmpleado: ['', [Validators.required]]
    })
  }

}
