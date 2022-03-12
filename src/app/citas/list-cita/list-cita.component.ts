import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/core/models/Citas.model';
import { CitasService } from 'src/app/core/services/citas/citas.service';

@Component({
  selector: 'app-list-cita',
  templateUrl: './list-cita.component.html',
  styleUrls: ['./list-cita.component.scss']
})
export class ListCitaComponent implements OnInit {
  citas: Cita[]=[];
  displayedColumns: string[] =['Fecha', 'Hora', 'Estado', 'actions']

  constructor(
    private citasService: CitasService,
  ) { }

  ngOnInit(): void {
    this.fetchProduct()
  }
  fetchProduct(){
    console.log('hola');
    this.citasService.getAllCitas()
    .subscribe((listCitas) => {
      this.citas = listCitas;
    })
  }
  deleteCita(){

  }
}
