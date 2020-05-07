import { Medicamento } from '../modelos/medicamento';
import { MedicamentosService } from '../servicios/medicamentos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  medicamento: Medicamento = {nombre: '', cantidad: '', tomas: '', foto: null};
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';


  constructor(
    private router: Router,
    private medicamentoFirestore: MedicamentosService) { }


  ngOnInit() {
  }

nuevoMedicamento() {
  let medicamento: Medicamento = {
      nombre : this.medicamento.nombre,
      cantidad : this.medicamento.cantidad,
      tomas: this.medicamento.tomas,
      foto: this.medicamento.foto
    };

  this.medicamentoFirestore.altaMedicamento(medicamento).then(
      () => this.router.navigate(['list'])
);
  }
  salir(){this.router.navigate(['list']);}
}
