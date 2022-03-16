import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/core/models/Citas.model';
import { Client } from 'src/app/core/models/client.model';
import { CitasService } from 'src/app/core/services/citas/citas.service';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-list-cita',
  templateUrl: './list-cita.component.html',
  styleUrls: ['./list-cita.component.scss']
})
export class ListCitaComponent implements OnInit {
  citas: Cita[]=[];
  clientes: Client[]=[];
  CitasClientes: any[] =[];
  displayedColumns: string[] =['Fecha', 'Hora', 'Estado', 'actions']

  constructor(
    private route: Router,
    private citasService: CitasService,
    private clientsService: ClientsService,
  ) { }

  ngOnInit(): void {
    this.fetchCitas()
  }
  fetchCitas(){
    this.citasService.getAllCitas()
    .subscribe((listCitas) => {
      this.citas = listCitas;
      this.CitasClientes.push(listCitas)
      this.citas.forEach(cita => {
        this.clientsService.getClients(cita.idCliente).subscribe((client) =>{
          this.clientes.push(client);
        })
      });
    })
    //this.CitasClientes.push(this.citas);
    this.CitasClientes.push(this.clientes);
    console.log(this.CitasClientes[0]);
  }
  deleteCita(id: number){
    this.citasService.deleteCita(id).subscribe();
    window.location.reload();
  }
}
