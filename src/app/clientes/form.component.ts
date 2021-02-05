import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   cliente: Cliente = new Cliente();
   titulo: string = "Crear Cliente";

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activateRouter: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.cargarCliente()
  }


  cargarCliente(): void{
    this.activateRouter.params.subscribe( params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }

  create(): void{
    console.log( "========================================" );
    console.log(this.cliente);
    this.clienteService.create(this.cliente)
    .subscribe(
      cliente => {
        this.router.navigate(['/clientes']),
        Swal.fire(  'Nuevo Cliente', `Cliente ${cliente.nombre} creado con éxito`, 'success');
      }
    );
  }
  

}
