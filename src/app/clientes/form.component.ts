import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

   cliente: Cliente = new Cliente();
   tituloForm:string = "Crear Cliente";

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public create(){
    console.log("clic");
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }

}
