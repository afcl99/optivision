import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client.model';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clientes: Client[]=[];
  displayedColumns: string[] =['Identificacion','Nombre completo', 'Telefono', 'Direccion','Email', 'actions']

  constructor(
    private route: Router,
    private clientService: ClientsService,
  ) { }
  
  ngOnInit(): void {
    this.fetchOptometras()
  }
  fetchOptometras(){
    this.clientService.getAllClients()
    .subscribe((listClientes) => {
      this.clientes = listClientes;            
      });
  }
  deleteClient(id: number){
    this.clientService.deleteClients(id).subscribe();
    window.location.reload();
  }
}
